function App() {
  return (
    <div className="box">
      <div className="w-[300px] h-[300px] grid [grid-template-areas:'a_a_a'_'b_c_c'_'b_c_c']">
        <div className="[grid-area:a] bg-[red]"></div>
        <div className="[grid-area:b] bg-[yellow]"></div>
        <div className="[grid-area:c] bg-[#b8a6d9]"></div>
      </div>
    </div>
  )
}

export default App
