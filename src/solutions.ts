const multiplyValue = (value: number, multiplier?: number): number => {
  if (!multiplier && multiplier !== 0) {
    return value * 2;
  }
  return value * multiplier;
};

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean" && value === true) {
    return "Active";
  } else {
    return "Inactive";
  }
};

const formatCoordinate = (
  location: readonly [
    latitude: number,
    longitude: number,
    locationName: string,
  ],
): string => {
  return `Location: ${location[2]} (${location[0]}, ${location[1]})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (course: Course[], minStudents: number): Course[] => {
  let popularCourses = [];
  for (let x = 0; x < course.length; x++) {
    if (course[x].students >= minStudents && course[x].isPublished == true) {
      popularCourses.push(course[x]);
    }
  }
  return popularCourses;
};
