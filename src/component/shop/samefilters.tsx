type filterProps = {
    title: string;
    items: string[];
    showCount: boolean;
}

const SameFilters: React.FC<filterProps> = ({ title, items,showCount }) => {
    return (
        <div className="widget widget-collapsible">
            <h3 className="widget-title">
                <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
                    {title}
                </a>
            </h3>
            <div className="collapse show" id="widget-1">
                <div className="widget-body">
                    <div className="filter-items filter-items-count">
                        {items.map((item, index) => {
                            return (
                                <div className="filter-item" key={index}>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id={`cat-${index}`} />
                                        <label className="custom-control-label" htmlFor={`cat-${index}`}>{item}</label>
                                    </div>
                                    {
                                        showCount ? <span className="item-count">3</span> : ''
                                    }
                                    
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SameFilters;