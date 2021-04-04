const ImagesPreloader = ({ page, target, allIngredients, ingredients }) => {
  return (
    <>
      {(target === page &&
      !ingredients.find((item) => item.type === target && item.added)
        ? allIngredients
        : ingredients
      )
        .filter((ing) => ing.type === target)
        .map((ing) => (
          <img
            key={ing.id}
            src={ing.img}
            alt={ing.name}
            style={{
              display: ing.added ? 'block' : 'none',
              zIndex:
                ingredients[ingredients.length - 1].img === ing.img ? '1' : '0',
            }}
          />
        ))}
    </>
  );
};

export default ImagesPreloader;
