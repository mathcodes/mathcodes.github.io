import React from "react";
import Pricing from "../components/pricing/Pricing";

const Prices = () => {
    return (
        <section className="container py-5 mt-5 sm:py-10 sm:mt-10">
            <div id="projects" className="text-center">
                <p className="mb-1 text-2xl font-general-medium sm:text-4xl text-ternary-dark dark:text-ternary-light">
                    Projects
                </p>
            </div>
            <Pricing />
        </section>

    )
}
export default Prices