function App() {
  return (
    <div>
      <h1>Hospital Management System</h1>

      <form>
        <input placeholder="Patient Name" />
        <br /><br />

        <input placeholder="Doctor Name" />
        <br /><br />

        <input type="date" />
        <br /><br />

        <input type="time" />
        <br /><br />

        <button>
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default App;