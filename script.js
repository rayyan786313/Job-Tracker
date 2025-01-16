// Handle form submission to add a new job
document.getElementById('job-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const companyName = document.getElementById('company-name').value;
    const position = document.getElementById('position').value;
    const applyDate = document.getElementById('apply-date').value;
    const interviewDate = document.getElementById('interview-date').value;
    const status = document.getElementById('status').value;
  
    // Create a new job object
    const job = {
      companyName,
      position,
      applyDate,
      interviewDate,
      status
    };
  
    // Create a new job item element
    const jobItem = document.createElement('div');
    jobItem.classList.add('job-item');
    jobItem.setAttribute('data-status', status);
    jobItem.innerHTML = `
      <h3>${companyName} - ${position}</h3>
      <p><strong>Applied On:</strong> ${applyDate}</p>
      <p><strong>Interview Date:</strong> ${interviewDate}</p>
      <select onchange="updateJobStatus(event, ${jobItem})">
        <option value="applied" ${status === 'applied' ? 'selected' : ''}>Applied</option>
        <option value="interview" ${status === 'interview' ? 'selected' : ''}>Interview</option>
        <option value="rejected" ${status === 'rejected' ? 'selected' : ''}>Rejected</option>
        <option value="offer" ${status === 'offer' ? 'selected' : ''}>Got Offer</option>
      </select>
      <button onclick="editJob(this)">Edit</button>
      <button onclick="saveJob(this)" style="display:none;">Save</button>
      <button onclick="deleteJob(this)">Delete Job</button>
    `;
  
    // Append the job item to the corresponding status section
    document.getElementById(`${status}-jobs`).appendChild(jobItem);
  
    // Reset form after adding the job
    document.getElementById('job-form').reset();
  });
  
  // Update the status of a job
  function updateJobStatus(event, jobItem) {
    const newStatus = event.target.value;
    const currentStatus = jobItem.getAttribute('data-status');
  
    if (currentStatus !== newStatus) {
      // Remove from the old section
      document.getElementById(`${currentStatus}-jobs`).removeChild(jobItem);
      // Add to the new section
      jobItem.setAttribute('data-status', newStatus);
      document.getElementById(`${newStatus}-jobs`).appendChild(jobItem);
    }
  }
  
  // Edit job function
  function editJob(button) {
    const jobItem = button.parentElement;
    const select = jobItem.querySelector('select');
    const buttons = jobItem.querySelectorAll('button');
    
    // Enable editing by showing save button and hiding edit button
    buttons[0].style.display = 'none'; // Hide "Edit" button
    buttons[1].style.display = 'inline-block'; // Show "Save" button
  
    // Make the select editable
    select.disabled = false;
  }
  
  // Save job function
  function saveJob(button) {
    const jobItem = button.parentElement;
    const select = jobItem.querySelector('select');
    const buttons = jobItem.querySelectorAll('button');
  
    // Disable editing by hiding save button and showing edit button
    buttons[0].style.display = 'inline-block'; // Show "Edit" button
    buttons[1].style.display = 'none'; // Hide "Save" button
  
    // Make the select non-editable
    select.disabled = true;
  
    // Update status section based on selected status
    updateJobStatus({ target: select }, jobItem);
  }
  
  // Delete job function
  function deleteJob(button) {
    const jobItem = button.parentElement;
    jobItem.remove();
  }
  