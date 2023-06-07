import "./BlogSection.scss";
import Wrapper from "../../../components/wrapper/Wrapper";
import Button from "../../../components/button/Button";
import BlogCard from "../../../components/blogCard/BlogCard";

const BlogSection = () => {
  return (
    <section className="blogSection">
      <Wrapper>
        <div className="blogSection__text">
          <h2>Browse my latest posts</h2>
          <Button className="btn-transparent">Browse all posts</Button>
        </div>

        <div className="blogSection__container">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </Wrapper>

      <div className="blogSection__bg"></div>
    </section>
  );
};

export default BlogSection;
