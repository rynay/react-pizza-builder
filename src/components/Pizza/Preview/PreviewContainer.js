import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Preview from './Preview';

const PreviewContainer = ({ location }) => {
  const page = location.pathname.slice(1);
  const allIngredients = useSelector((store) => store.allIngredients);
  const ingredients = useSelector((store) => store.ingredients);
  return <Preview {...{ page, allIngredients, ingredients }} />;
};

export default withRouter(PreviewContainer);
