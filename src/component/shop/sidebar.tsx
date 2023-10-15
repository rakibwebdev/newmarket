import SameFilters from "./samefilters";
import RangeFilter from "./rangefilter";

export default function Sidebar() {

  return (
    <aside className="col-lg-3 order-lg-first">
        <div className="sidebar sidebar-shop">
            <div className="widget widget-clean">
                <label>Filters:</label>
                <a href="#" className="sidebar-filter-clear">Clean All</a>
            </div>

            
            {/* Category filter     */}
            <SameFilters title="Category" items={['Electronics', 'Furniture']} showCount={true}/>

            {/* Size filter     */}
            <SameFilters title="Size" items={['S', 'M', 'L', 'XL']} showCount={false}/>


            {/* <div className="widget widget-collapsible">
                <h3 className="widget-title">
                    <a data-toggle="collapse" href="#widget-3" role="button" aria-expanded="true" aria-controls="widget-3">
                        Colour
                    </a>
                </h3>

                <div className="collapse show" id="widget-3">
                    <div className="widget-body">
                        <div className="filter-colors">
                            <a href="#" style="background: #b87145;"><span className="sr-only">Color Name</span></a>
                            <a href="#" style="background: #f0c04a;"><span className="sr-only">Color Name</span></a>
                            <a href="#" style="background: #333333;"><span className="sr-only">Color Name</span></a>
                            <a href="#" className="selected" style="background: #cc3333;"><span className="sr-only">Color Name</span></a>
                            <a href="#" style="background: #3399cc;"><span className="sr-only">Color Name</span></a>
                            <a href="#" style="background: #669933;"><span className="sr-only">Color Name</span></a>
                            <a href="#" style="background: #f2719c;"><span className="sr-only">Color Name</span></a>
                            <a href="#" style="background: #ebebeb;"><span className="sr-only">Color Name</span></a>
                        </div><!-- End .filter-colors -->
                    </div><!-- End .widget-body -->
                </div> 
            </div> */}

            {/* Brand filter     */}
            <SameFilters title="Brand" items={['Apple', 'Samsung', 'LG', 'Oppo']} showCount={false}/>

           {/* Range Filter */}
           <RangeFilter title="Price" min={0} max={1000}/>
        </div>
    </aside>
  )
}

