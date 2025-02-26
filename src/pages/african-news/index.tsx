import React from 'react'
import BlogCard from '../../components/blog/BlogCard';
import blog3 from "../../assets/images/blog3.jpeg"
import blog4 from "../../assets/images/blog4.png";
import blog5 from "../../assets/images/blog5.jpeg"

const News:React.FC = () => {
  return (
    <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-6 px-13">
        <BlogCard title="Examining Labor Market Trends in Northern and Sub-Saharan Africa" name="Edward Evans" desc="Northern and Sub-Saharan Africa face the risk of slowing progress in job quality and opportunities. With rising levels of unemployment, the world of work in Africa is still challenged with..." image={blog3}/>
        <BlogCard title="Technology's Impact on Healthcare in Africa" name="Edward Evans" desc="Technology is changing how health care is delivered in Africa, giving more people in remote areas access to better care..." image={blog4}/>
        <BlogCard title="Economic Disparities in Africa" name="Edward Evans" desc="African nations generally fall toward the bottom of any list measuring small-sized economic activity, such as income per capita or GDP per capita, despite their wealth of natural resources...." image={blog5}/>
        <BlogCard title="Examining Labor Market Trends in Northern and Sub-Saharan Africa" name="Edward Evans" desc="Northern and Sub-Saharan Africa face the risk of slowing progress in job quality and opportunities. With rising levels of unemployment, the world of work in Africa is still challenged with..." image={blog3}/>
        <BlogCard title="Examining Labor Market Trends in Northern and Sub-Saharan Africa" name="Edward Evans" desc="Northern and Sub-Saharan Africa face the risk of slowing progress in job quality and opportunities. With rising levels of unemployment, the world of work in Africa is still challenged with..." image={blog3}/>
        <BlogCard title="Technology's Impact on Healthcare in Africa" name="Edward Evans" desc="Technology is changing how health care is delivered in Africa, giving more people in remote areas access to better care..." image={blog4}/>
        <BlogCard title="Economic Disparities in Africa" name="Edward Evans" desc="African nations generally fall toward the bottom of any list measuring small-sized economic activity, such as income per capita or GDP per capita, despite their wealth of natural resources...." image={blog5}/>
        <BlogCard title="Examining Labor Market Trends in Northern and Sub-Saharan Africa" name="Edward Evans" desc="Northern and Sub-Saharan Africa face the risk of slowing progress in job quality and opportunities. With rising levels of unemployment, the world of work in Africa is still challenged with..." image={blog3}/>
        <BlogCard title="Examining Labor Market Trends in Northern and Sub-Saharan Africa" name="Edward Evans" desc="Northern and Sub-Saharan Africa face the risk of slowing progress in job quality and opportunities. With rising levels of unemployment, the world of work in Africa is still challenged with..." image={blog3}/>
        <BlogCard title="Technology's Impact on Healthcare in Africa" name="Edward Evans" desc="Technology is changing how health care is delivered in Africa, giving more people in remote areas access to better care..." image={blog4}/>
        <BlogCard title="Economic Disparities in Africa" name="Edward Evans" desc="African nations generally fall toward the bottom of any list measuring small-sized economic activity, such as income per capita or GDP per capita, despite their wealth of natural resources...." image={blog5}/>
        <BlogCard title="Examining Labor Market Trends in Northern and Sub-Saharan Africa" name="Edward Evans" desc="Northern and Sub-Saharan Africa face the risk of slowing progress in job quality and opportunities. With rising levels of unemployment, the world of work in Africa is still challenged with..." image={blog3}/>
    </div>
  )
}

export default News;