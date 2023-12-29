function App() {
  return (
    <div>
      <h1>bottom-sheet demo</h1>
      <button
        type="button"
        onClick={() =>
          (
            document.getElementById('testBottomSheet') as BottomSheet
          ).openSheet()
        }
      >
        openSheet
      </button>
      <button
        type="button"
        onClick={() =>
          (
            document.getElementById('testBottomSheet') as BottomSheet
          ).openFullSheet()
        }
      >
        openFullSheet
      </button>

      <bottom-sheet id="testBottomSheet" title="Title is Lorem ipsum">
        <main className="_example">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div>
            <button
              type="button"
              onClick={() =>
                (
                  document.getElementById('testBottomSheet') as BottomSheet
                ).closeSheet()
              }
            >
              closeSheet
            </button>
            <button
              type="button"
              onClick={() =>
                (
                  document.getElementById('testBottomSheet') as BottomSheet
                ).fullSheet()
              }
            >
              fullSheet
            </button>
          </div>
        </main>
      </bottom-sheet>
    </div>
  );
}

export default App;
