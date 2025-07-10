import SuperfoodsforBetterHealth from "../public/10SuperfoodsforBetterHealth.avif"
import MealPrepMadeEasy from "../public/MealPrepMadeEasy.avif"
import UnderstandingMacronutrients from "../public/UnderstandingMacronutrients.avif"
import { useState } from "react"
import ThumbnailYoutube1 from "../public/Thumbnail_youtube1.avif"
import ThumbnailYoutube2 from "../public/Thumbnail_youtube2.webp"
import ThumbnailYoutube3 from "../public/Thumbnail_youtube3.avif"
const Blog = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const blogPosts = [
    {
      title: "10 Superfoods for Better Health",
      excerpt:
        "Discover the power of nutrient-dense foods that can transform your health and boost your energy levels. ",
      image: SuperfoodsforBetterHealth,
      date: "March 15, 2024",
      category: "Nutrition Tips",
    },
    {
      title: "Meal Prep Made Easy",
      excerpt: "Learn how to prepare healthy meals in advance and save time while maintaining a nutritious diet.",
      image: MealPrepMadeEasy,
      date: "March 10, 2024",
      category: "Meal Planning",
    },
    {
      title: "Understanding Macronutrients",
      excerpt: "A comprehensive guide to proteins, carbohydrates, and fats - and how to balance them in your diet.",
      image: UnderstandingMacronutrients,
      date: "March 5, 2024",
      category: "Education",
    },
  ]
  const toggleExpand = (index) => {
    setExpandedIndex(prev => prev === index ? null : index)
  }
  const vlogs = [
    {
      title: "Healthy Breakfast Ideas",
      thumbnail: ThumbnailYoutube1,
      duration: "8:45",
      url: "https://youtube.com/shorts/xsIMrhUyfOA?si=4TlcwVeQkjy6mEM6"
    },
    {
      title: "Grocery Shopping Tips",
      thumbnail: ThumbnailYoutube2,
      duration: "12:30",
      url: "https://youtube.com/shorts/xsIMrhUyfOA?si=4TlcwVeQkjy6mEM6"
    },
    {
      title: "Cooking Healthy Meals",
      thumbnail: ThumbnailYoutube3,
      duration: "15:20",
      url: "https://youtube.com/shorts/xsIMrhUyfOA?si=4TlcwVeQkjy6mEM6"
    },
  ]

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h3 className="text-3xl md:text-4xl font-bold text-green-900 mb-6 text-center">Latest Blog Posts & Vlogs</h3>

        <div className="blog-section">
          <h3>Recent Articles</h3>
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
                <article key={index} className="blog-card">
                  <img src={post.image.src || "/placeholder.svg"} alt={post.title}/>
                  <div className="blog-content">
                    <span className="blog-category">{post.category}</span>
                    <h4>{post.title}</h4>
                    <p>{post.excerpt}</p>

                    {/* Show details if expanded */}
                    {expandedIndex === index && (
                        <p className="more-details text-gray-600 mt-2">{post.details}</p>
                    )}

                    <div className="blog-meta">
                      <span className="blog-date">{post.date}</span>
                      {/*<button*/}
                      {/*    className="read-more"*/}
                      {/*    onClick={() => toggleExpand(index)}*/}
                      {/*>*/}
                      {/*  {expandedIndex === index ? "Show Less" : "Read More"}*/}
                      {/*</button>*/}
                    </div>
                  </div>
                </article>
            ))}
          </div>
        </div>

        <div className="vlog-section">
          <h3>Video Content</h3>
          <div className="vlog-grid">
            {vlogs.map((vlog, index) => (
                <a
                    key={index}
                    href={vlog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vlog-card"
                >
                  <div className="vlog-thumbnail">
                    <img src={vlog.thumbnail.src || "/placeholder.svg"} alt={vlog.title}/>
                    <div className="play-button">▶</div>
                    <span className="duration">{vlog.duration}</span>
                  </div>
                  <h4>{vlog.title}</h4>
                </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Blog
