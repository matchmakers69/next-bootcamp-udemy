import { type Review } from "@prisma/client";
import { Stars } from "@/ui/components/Stars";

interface ReviewCardProps {
	review: Review;
	reviews: Review[];
}

const getInitials = (fullName: string): string =>
	fullName
		.split(" ")
		.map((word) => word.charAt(0))
		.join("");

function ReviewCard({ review, reviews }: ReviewCardProps) {
	return (
		<div className="mb-7 border-b pb-7">
			<div className="flex">
				<div className="flex w-1/6 flex-col items-center">
					<div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-400">
						<h2 className="text-2xl uppercase text-white">{review && getInitials(review.name as string)}</h2>
					</div>
					<p className="text-center">{review.name}</p>
				</div>
				<div className="ml-10 w-5/6">
					<div className="flex items-center">
						<Stars reviews={reviews} />
					</div>
					<div className="mt-5">
						<p className="text-lg font-light">{review.text}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export { ReviewCard };
