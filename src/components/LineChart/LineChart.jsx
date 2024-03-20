import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';


const LineChart = () => {
   const subjectsMarksData = [
    
        {"name": "Student 1", "math_marks": 85, "physics_marks": 78, "chemistry_marks": 70},
        {"name": "Student 2", "math_marks": 72, "physics_marks": 65, "chemistry_marks": 68},
        {"name": "Student 3", "math_marks": 90, "physics_marks": 85, "chemistry_marks": 80},
        {"name": "Student 4", "math_marks": 65, "physics_marks": 60, "chemistry_marks": 55},
        {"name": "Student 5", "math_marks": 78, "physics_marks": 72, "chemistry_marks": 75},
        {"name": "Student 6", "math_marks": 88, "physics_marks": 82, "chemistry_marks": 85},
        {"name": "Student 7", "math_marks": 70, "physics_marks": 68, "chemistry_marks": 72},
        {"name": "Student 8", "math_marks": 82, "physics_marks": 75, "chemistry_marks": 78},
        {"name": "Student 9", "math_marks": 75, "physics_marks": 70, "chemistry_marks": 65},
        {"name": "Student 10", "math_marks": 79, "physics_marks": 74, "chemistry_marks": 76}
    
    
   ]; 
   
  return (
    <div>
        <LChart width={800} height={400} data={subjectsMarksData}>
        <XAxis dataKey="name" />
        <YAxis></YAxis>
            <Line dataKey="math_marks" stroke='red'></Line>
            <Line dataKey={'physics_marks'} stroke='blue'></Line>
        </LChart>
    </div>
  );
};

export default LineChart;