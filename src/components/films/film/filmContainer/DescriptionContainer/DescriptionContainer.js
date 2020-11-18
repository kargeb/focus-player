import EditingDescription from './editingDescription/EditingDescription';
import NormalDescription from './normalDescription/NormalDescription';

const DescriptionContainer = ({ isEdit, film, setEdit, toggleEditMode }) => {
  return (
    <div>
      {isEdit ? (
        <EditingDescription film={film} toggleEditMode={toggleEditMode} setEdit={setEdit} />
      ) : (
        <NormalDescription film={film} toggleEditMode={toggleEditMode} />
      )}
    </div>
  );
};

export default DescriptionContainer;
