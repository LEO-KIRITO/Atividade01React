import './App.css'
import FirstComponent from './Components/FirstComponets'
import TemplateExpression from './Components/TemplateExpressions'


function App() {

  return (
   <div>
    <h1>Currículo</h1>

    <h2>Leonardo H</h2>
  
    {/* Chamando o componente que criamos */}
    <FirstComponent />

    {/* Usar esse componente */}
    <TemplateExpression />
   </div>
  )
}

export default App
