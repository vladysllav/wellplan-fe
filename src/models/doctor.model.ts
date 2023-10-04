export interface DoctorModel {
    id?: string;
    fullName: string;
    image: string;
    email: string;
    city: string;
    yearsOfExperience: number;
    specialization: string;
    bio: string;
    reviews: ReviewModel;
}

export type ReviewModel = {
    averageRating: number;
    numberOfReviews: number;
};
