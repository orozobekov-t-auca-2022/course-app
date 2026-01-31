import './App.css'
import CoursesList from './pages/CoursesList/CoursesList'
import Header from './shared/components/Header/Header'
import './App.css'
import type { CourseProps } from './shared/components/CourseCard/CourseCard'

function App() {
  const courses: CourseProps[] = [
    {title: "Angular", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", authors: ["Dave Haisenberg", "Tony Ja"], duration: "2:30 hours", creationDate: "20.03.2012"},
    {title: "React", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", authors: ["Dave Simonnds", "Valentina Lary"], duration: "1:30 hours", creationDate: "14.08.2017"},
    {title: "ASP .NET", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", authors: ["Sam Smith", "Tony Robbins"], duration: "3:30 hours", creationDate: "01.06.2022"},
  ]

  return (
    <>
      <Header />
      <div className="content">
        <CoursesList courses={courses} />
      </div>
    </>
  )
}

export default App
