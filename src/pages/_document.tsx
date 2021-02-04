import Document, { DocumentInitialProps } from 'next/document';
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss';
import { NextPageContext } from 'next';
import { RenderPage } from 'next/dist/next-server/lib/utils';

export interface MyPageContext extends NextPageContext {
  renderPage: RenderPage;
  isServer: boolean;
}

export default class JssDocument extends Document {
  static async getInitialProps(ctx: MyPageContext): Promise<DocumentInitialProps> {
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props) => (
          <JssProvider registry={registry} generateId={generateId}>
            <App {...props} />
          </JssProvider>
      ),
    });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      ),
    };
  }
}
