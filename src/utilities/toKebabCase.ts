const toKebabCase = (string: string): string => string.replace(/\s+/g, '-').toLowerCase();

export default toKebabCase;
