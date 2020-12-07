import { useSelector } from 'react-redux';
import EditingDescription from './editingDescription/EditingDescription';
import NormalDescription from './normalDescription/NormalDescription';

const DescriptionContainer = ({ film }) => {
  const { isEditMode } = useSelector((state) => state.editFilmReducer);
  // prettier-ignore
  return (
    <div>
      {isEditMode ?
        <EditingDescription film={film} />
      :
        <NormalDescription film={film} />}
    </div>
  );
};

export default DescriptionContainer;
