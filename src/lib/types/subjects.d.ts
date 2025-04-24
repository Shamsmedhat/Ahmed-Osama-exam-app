export interface Subject {
    _id: string;
    name: string;
    icon: string;
    createdAt: string;
}

export interface SubjectResponse {
    message: string;
    metadata: {
        currentPage: number;
        numberOfPages: number;
        limit: number;
    };
    subjects: Subject[];
}
