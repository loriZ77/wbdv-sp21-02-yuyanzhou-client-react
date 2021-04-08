import CourseManager from "./components/course-manager";
import {BrowserRouter} from "react-router-dom";
import Home from "./components/home";
import Route from "react-router-dom/es/Route";
import CourseEditor from "./components/course-editor/course-editor";
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";


function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid">
              <Route path="/" exact={true}>
                  <Home/>
              </Route>
              <Route path="/courses/:layout" exact={true}>
                  <CourseManager/>
              </Route>

              <Route path={[
                  "/courses/:layout/edit/:courseId",
                  "/courses/:layout/edit/:courseId/:moduleId",
                  "/courses/:layout/edit/:courseId/:moduleId/:lessonId",
                  "/courses/:layout/edit/:courseId/:moduleId/:lessonId/:topicId",
                  "/courses/:layout/edit/:courseId/:moduleId/:lessonId/:topicId/:widgetId"
              ]}
                     exact={true}
                     render={(props) =>
                         <CourseEditor {...props}/>}>
              </Route>

              <Route path="/courses/:courseId/quizzes/" exact={true}>
                  <QuizzesList/>
              </Route>

              <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
                  <Quiz/>
              </Route>
          </div>
      </BrowserRouter>
  );
}

export default App;
