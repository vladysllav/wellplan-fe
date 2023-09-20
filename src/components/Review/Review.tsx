import {ReviewModel} from '../../models/doctor.model';

const Review = ({ review, path = '#' }: { review: ReviewModel, path?: string }) => {
    const { averageRating, numberOfReviews } = review;

    const integerPart = Math.floor(averageRating);
    const fractionalPart = averageRating - integerPart;

    const starIcons = [];

    for (let i = 0; i < integerPart; i++) {
        starIcons.push(
            <span key={i} className="text-yellow-500">&#9733;</span>
        );
    }

    if (fractionalPart > 0) {
        const fractionalWidth = `${fractionalPart * 100}%`;
        starIcons.push(
            <span key="fractional-star" className="relative">
        <span
            className="absolute top-0 left-0 w-full h-full overflow-hidden"
            style={{ width: fractionalWidth }}
        >
          <span className="text-yellow-500">&#9733;</span>
        </span>
        <span className="text-yellow-500">&#9733;</span>
      </span>
        );
    }

    const totalStars = 5;
    while (starIcons.length < totalStars) {
        starIcons.push(
            <span key={starIcons.length} className="text-gray-300">&#9733;</span>
        );
    }

    return (
        <a href={path} className="flex items-center">
            <div className="flex space-x-1">{starIcons}</div>
            <span className="text-gray-600 ml-2">({numberOfReviews} reviews)</span>
        </a>
    );
};

export default Review;
