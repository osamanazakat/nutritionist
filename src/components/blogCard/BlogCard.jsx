import "./BlogCard.scss";
import { Blog } from "../../assets";
import { IoIosArrowForward } from "react-icons/io";

const BlogCard = () => {
  return (
    <article className="blogCard">
      <div>
        <img src={Blog} alt="" />
      </div>

      <div className="blogCard__text">
        <h3>Study shows how much water you should drink a day</h3>

        <div>
          <p>Jan 16, 2023</p>
          <div className="blogCard__icon">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
