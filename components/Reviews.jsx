export default function Reviews() {
  const reviews = [
    {
      id: "review-1",
      stars: "★★★★★",
      text: '"Raghu Furnishing completely elevated our double-height living room in Gomti Nagar. The motorized linen curtains and sheer layering look like something straight out of Architectural Digest!"',
      author: "Dr. Rajesh Verma",
      location: "Gomti Nagar Extension, Lucknow"
    },
    {
      id: "review-2",
      stars: "★★★★★",
      text: '"We got our 4BHK curtains and bespoke sofa reupholstery done. The fabric quality and in-house stitching are unmatched in Lucknow. Super punctual and professional team."',
      author: "Pooja & Amit Singhal",
      location: "Sushant Golf City, Lucknow"
    },
    {
      id: "review-3",
      stars: "★★★★★",
      text: '"Extremely satisfied with the 100% blackout curtains for our master bedroom and wooden blinds in the study. The in-home consultation made fabric selection so effortless."',
      author: "Col. K. N. Srivastava",
      location: "Mahanagar, Lucknow"
    }
  ];

  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="reviews-box-editorial">
          <div className="reviews-badge">
            <i className="fa-brands fa-google"></i>
            <span>Google Verified Reviews • 4.9 / 5.0 Rating</span>
          </div>
          <h2 className="reviews-title">Loved by Lucknow's Discerning Homeowners</h2>
          <p className="reviews-sub">
            Read what residents across Gomti Nagar, Hazratganj, and Aliganj say about our custom craftsmanship.
          </p>

          <div className="testimonials-grid">
            {reviews.map((rev) => (
              <div key={rev.id} className="testimonial-card">
                <div className="stars">{rev.stars}</div>
                <p className="test-text">{rev.text}</p>
                <div className="test-author">
                  <strong>{rev.author}</strong>
                  <span>{rev.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
