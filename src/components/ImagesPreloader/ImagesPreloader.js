const ImagesPreloader = ({ page, allIngredients, ingredients }) => {
  return (
    <>
      {(!ingredients.find((item) => item.type === page && item.added)
        ? allIngredients
        : ingredients
      )
        .filter((ing) => ing.type.includes(page))
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
