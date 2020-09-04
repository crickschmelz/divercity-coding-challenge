export async function loginUser(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return response.json();
}

export async function registerUser(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return response.json();
}

export async function applyToJob(url = "", token = "", params = {}) {
  const searchParams = Object.keys(params)
    .map((key) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
    })
    .join("&");
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: searchParams
  });
  return response.json();
}

// fetches job details from API
export async function getJobs() {
  const response = await fetch("https://divercity-test.herokuapp.com/jobs");
  return response.json();
}
