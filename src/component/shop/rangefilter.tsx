'use client'

import { useState } from "react";

type RangeFilterProps = {
    title: string;
    min: number;
    max: number;
}
const RangeFilter = ({ title, min, max }:RangeFilterProps) => {
    const [value, setValue] = useState(min);
    const handleRangeUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setValue(parseInt(value));
    }
    
    return(
        <div className="widget widget-collapsible">
            <h3 className="widget-title">
                <a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
                    {title}
                </a>
            </h3>

            <div className="collapse show" id="widget-5">
                <div className="widget-body">
                    <div className="filter-price">
                        <div className="filter-price-text">
                            Price Range:
                            <span id="filter-price-range">{value}</span>
                        </div>

                        <div id="price-slider">
                            <input type="range" id="price-slider-input" min={min} max={max} step="5" value={value} onChange={handleRangeUpdate}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RangeFilter;