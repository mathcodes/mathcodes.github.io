import React from 'react';
import Methods from '../components/methods/Methods';
import CardGallery from '../components/cards/CardGallery';
// import { comparisons } from '../data/comparisonsData';
//
import { useContext } from 'react';
// import { FiSearch } from 'react-icons/fi';
// import ProjectSingle from './ProjectSingle';
// import { ProjectsContext } from '../../context/ProjectsContext';
// import ProjectsFilter from './ProjectsFilter';

const Resources = () => {
	// const {
	// 	projects,
	// 	searchProject,
	// 	setSearchProject,
	// 	searchProjectsByTitle,
	// 	selectProject,
	// 	setSelectProject,
	// 	selectProjectsByCategory,
	// } = useContext(ProjectsContext);
console.log(CardGallery);
	return (
		<section className="container py-5 mt-5 sm:py-10 sm:mt-10">
			<div id="projects" className="text-center">
				<p className="mb-1 text-2xl font-general-medium sm:text-4xl text-ternary-dark dark:text-ternary-light">
					Resources
				</p>
			</div>




				 <Methods />

			<div className="grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
				 <CardGallery />
			</div>
		</section>
	);
};

export default Resources;

// const Resources = () => {
//   const [showMethods, setShowMethods] = React.useState(false);

//   const onShowMethods = () => {
//     setShowMethods(!showMethods);
//   };

//   return (
//     <>
//     <div className="px-4 mx-auto ">
// <div class="">
//    <h1 className="text-lg text-orange-500">Array Methods</h1>
//   <p className="text-sm">Click the button below to see the methods</p>
//   <button
//     className="px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
//     onClick={onShowMethods}
//   >
//     Show Methods
//   </button>
//   <div className="grid grid-cols-4 gap-4">

//   {showMethods && <Methods />}
//   </div>
//   <p>Hey</p>
// </div>
// </div>
//     </>
//   );
// };

// export default Resources;


