import { useSelector } from 'react-redux';
import EditingDescription from './editingDescription/EditingDescription';
import NormalDescription from './normalDescription/NormalDescription';

const DescriptionContainer = () => {
  const { isEditMode } = useSelector((state) => state.editFilmReducer);
  // prettier-ignore
  return (
    <div>
      {isEditMode ?
        <EditingDescription  />
      :
        <NormalDescription  />}
    </div>
  );
};

export default DescriptionContainer;
