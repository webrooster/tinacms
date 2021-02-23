// import Link from 'next/link';
import { useGithubEditing } from "react-tinacms-github";
const AppFooter = ({ preview }: any) => {
  return (
    <footer className="flex flex-wrap items-center justify-between p-4">
      <div className="w-full lg:w-auto lg:mr-6 mb-4 lg:mb-0 text-center">
        &copy; Logan
      </div>
      <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
        <div className="mx-auto lg:mx-0 lg:ml-auto">
          <EditLink editMode={preview} />
        </div>
      </div>
    </footer>
  );
};
export interface EditLinkProps {
  editMode: boolean;
}
export const EditLink = ({ editMode }: EditLinkProps) => {
  const github = useGithubEditing();

  return (
    <button
      onClick={editMode ? github.exitEditMode : github.enterEditMode}
      className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
    >
      {editMode
        ? "Exit Edit Mode"
        : "See a spelling Error? (I make lots) click here to edit this site"}
    </button>
  );
};
export default AppFooter;
