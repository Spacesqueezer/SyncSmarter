const decodeContentPath = (contentPath) => {
  // Разделяем путь по символу '/'
  const parts = contentPath.split("/");

  // Последняя часть содержит закодированную информацию
  const encodedInfo = parts[parts.length - 1];

  // Декодируем закодированную информацию
  const decodedInfo = decodeURIComponent(encodedInfo);

  // Заменяем закодированную информацию в исходном пути
  const decodedPath = contentPath.replace(encodedInfo, decodedInfo);

  return decodedPath;
};

const cutAlias = (inputPath) => {
  // Разделяем путь по символу '/'
  const parts = inputPath.split("/");

  // Получаем последний элемент массива, который идет после последнего '/'
  let afterLastSlash = parts[parts.length - 1];

  // Если после последнего '/' идет 'primary:', убираем 'primary:'
  if (afterLastSlash.startsWith("primary:")) {
    afterLastSlash = afterLastSlash.substring("primary:".length);
  }

  return afterLastSlash;
};

export { decodeContentPath, cutAlias };
