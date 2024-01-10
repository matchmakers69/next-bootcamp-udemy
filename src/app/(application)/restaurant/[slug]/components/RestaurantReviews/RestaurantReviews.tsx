import { type Review } from "@prisma/client";
import { ReviewCard } from "../ReviewCard";

interface RestaurantReviewsProps {
	reviews: Review[];
}

function RestaurantReviews({ reviews }: RestaurantReviewsProps) {
	return (
		<div>
			<h1 className="borber-b mb-7 mt-10 pb-5 text-3xl font-bold">
				What {reviews.length} {reviews.length === 1 ? "person" : "people"} people are saying
			</h1>
			<div>
				{reviews.map((review) => (
					<ReviewCard key={review.id} review={review} reviews={reviews} />
				))}
			</div>
		</div>
	);
}

export { RestaurantReviews };
