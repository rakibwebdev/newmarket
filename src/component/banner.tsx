interface BannerProps {
    pageTitle: string;
    bannerTitle: string;
    url: string;
}
const Banner: React.FC<BannerProps> = ({ pageTitle, bannerTitle, url }) => {
    return (
      <div className="page-header text-center" style={{ backgroundImage: `url(${url})` }}>
        <div className="container">
          <h1 className="page-title">{bannerTitle}<span>{pageTitle}</span></h1>
        </div>
      </div>
    );
  };
  
export default Banner;
