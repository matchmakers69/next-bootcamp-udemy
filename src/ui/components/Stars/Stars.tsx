import Image from "next/image";
import { type Review } from "@prisma/client";
import FullStar from "public/icons/full-star.png";
import HalfStar from "public/icons/half-star.png";
import EmptyStar from "public/icons/empty-star.png";
import { calculateReviewRatingAverage } from "@/utils/calculateReviewRatingAverage";

interface StarsProps {
	reviews: Review[];
}

function Stars({ reviews }: StarsProps) {
	const rating = calculateReviewRatingAverage(reviews);

	const renderStars = () => {
		const stars = [];
		// < 5 cause maximum amount of stars will be 5
		for (let i = 0; i < 5; i++) {
			const difference = parseFloat((rating - i).toFixed(1));

			if (difference >= 1) stars.push(FullStar);
			else if (difference < 1 && difference > 0) {
				if (difference <= 0.2) stars.push(EmptyStar);
				else if (difference > 0.2 && difference <= 0.6) stars.push(HalfStar);
				else stars.push(FullStar);
			}
			// We may hit 0
			else stars.push(EmptyStar);
		}

		return stars.map((star, index) => {
			return <Image key={index + 1} src={star} alt="full-rating-star-image" className="mr-1 h-4 w-4" />;
		});
	};
	return <div className="flex items-center">{renderStars()}</div>;
}

export { Stars };
