function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="flex flex-row text-lg text-ternary-dark dark:text-ternary-light">
				<a
 style={{height: '3rem', paddingBottom: '1em'}}
					href="https://www.jonchristie.net"
					target="__blank"
					className=" flex text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					<img src="https://www.jonchristie.net/favicon.png" alt="Jon Christie Logo" className="p-40" />
				</a>
				&nbsp;
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/mathcodes/mathcodes.github.io"
					target="__blank"
					className="flex hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Jon Christie
				</a>

			</div>
		</div>
	);
}

export default AppFooterCopyright;
