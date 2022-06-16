const draw = (elem, fontSize, fontStyle, text, x, y) => {
  const context = document.getElementById(`${elem}`);
  context.font = `${fontSize} ${fontStyle}`;
  context.strokeText(`${text}`, `${x}`, `${y}`);
};