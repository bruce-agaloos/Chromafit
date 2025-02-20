import React from 'react';

const Sidebar = () => {
    return (
        <aside className="w-64 p-4">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <div className="mb-4">
                <h4 className="font-semibold mb-2">Category</h4>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" className="mr-2" />
                            T-Shirts
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" className="mr-2" />
                            Hoodies
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" className="mr-2" />
                            Accessories
                        </label>
                    </li>
                </ul>
            </div>
            <div className="mb-4">
                <h4 className="font-semibold mb-2">Price Range</h4>
                <input type="range" min="0" max="1000" className="w-full" />
            </div>
            <div className="mb-4">
                <h4 className="font-semibold mb-2">Size</h4>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" className="mr-2" />
                            Small
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" className="mr-2" />
                            Medium
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" className="mr-2" />
                            Large
                        </label>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;