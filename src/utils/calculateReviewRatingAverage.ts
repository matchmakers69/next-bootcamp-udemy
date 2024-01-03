import { type Review } from "@prisma/client";

export const calculateReviewRatingAverage = (reviews: Review[]) => {
	if (!reviews.length) return 0;
	return (
		reviews.reduce((acc, item) => {
			return acc + item.rating;
		}, 0) / reviews.length
	);
};
