import React from "react";
import { MainLayout } from "../../Layouts";

type SampleLink = {
    name: string;
    link: string;
};
type IndexProps = {
    links: SampleLink[];
};

const Index: React.FC = ({ links }) => {
    return (
        <MainLayout className="flex items-center justify-center">
            <div className="flex flex-col">
                <div className="min-h-screen flex items-center justify-center">
                    <div className="flex flex-col justify-around h-full">
                        <div>
                            <h1 className="text-gray-600 text-center font-light tracking-wider text-5xl mb-6">
                                Laravel
                            </h1>
                            <ul className="list-reset">
                                {links.map((link: SampleLink) => (
                                    <li className="inline pr-8" key={link.name}>
                                        <a
                                            href={link.link}
                                            className="no-underline hover:underline text-sm font-normal text-teal-800 uppercase"
                                            title={link.name}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};
export default Index;
