
function render_subject_filters (parent) 
{
  const container = document.createElement("div");
  container.id = "subject_filters";
  parent.append(container);

  for (let subject of SUBJECTS) 
  {
    render_filter_element(container, subject.name);
  }
}
