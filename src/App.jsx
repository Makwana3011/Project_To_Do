import { useState } from "react";
import NewProject from "./componats/NewProject";
import NoProject from "./componats/NoProject";
import Sidebar from "./componats/Sidebar";
import SelectedProject from "./componats/SelectedProject";

function App() {

  const [projctState, setProjectState] = useState({
    selectedProject: undefined,  //un = no project, null == adding new project , id == selected project id
    projects: [],
    tasks: []
  })
  // console.log(projctState);
  function handelCreatProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProject: null
      }
    })
    // console.log(projctState);

  }

  function handelSaveProject(newproject) {
    setProjectState((prev) => {
      const newprojectData = {
        ...newproject,
        id: Math.round(Math.random() * 100)
      }
      return {
        ...prev,
        selectedProject: undefined,
        projects: [...prev.projects, newprojectData]
      }
    })
  }

  function handelCancelProject() {

    setProjectState((prev) => {
      return {
        ...prev,
        selectedProject: undefined
      }
    })

  }

  function handelSelect(id) {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProject: id,

      }
    })
  }

  function handelDeletProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
        projects: prev.projects.filter((single) => single.id !== prev.selectedProject)

      }
    })
  }

  function handelAddTask(params) {
    setProjectState((prev) => {
      const newTask = {
        task: params,
        projectid: prev.selectedProject,
        id: Math.round(Math.random() * 100)
      }
      return {
        ...prev,
        tasks: [newTask, ...prev.tasks]
      }
    })
  }
  function handelDeletTask(params) {
    setProjectState((prev) => {
      return {
        ...prev,

        tasks: prev.tasks.filter((single) => single.id !== params)

      }
    })
  }

  const selectproject = projctState.projects.find((single) => single.id === projctState.selectedProject)
  let firstPage = <SelectedProject project={selectproject} clickDelet={handelDeletProject} clickAddTask={handelAddTask}
    clickDeletTask={handelDeletTask} allTask={projctState.tasks} />

  if (projctState.selectedProject === null) {
    firstPage = <NewProject clickSave={handelSaveProject} clickCancel={handelCancelProject} />
  } else if (projctState.selectedProject === undefined) {
    firstPage = <NoProject clickCreat={handelCreatProject} />
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar clickCreat={handelCreatProject} data={projctState.projects} clickSelectProject={handelSelect} />

        {firstPage}


      </main></>
  );
}

export default App;
