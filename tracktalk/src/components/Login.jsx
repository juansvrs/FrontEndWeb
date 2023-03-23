import React from 'react'

export const Login = () => {
  return (
    <div>
        <div class='container'>
            <div class="card border-info mb-3 col-md-6 mx-auto mt-5">
                <div class="card-header text-center"> Welcome back! <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-wink-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z"></path>
                <path d="M9 10h-.01"></path>
                <path d="M14.5 15a3.5 3.5 0 0 1 -5 0"></path>
                <path d="M15.5 8.5l-1.5 1.5l1.5 1.5"></path>
                </svg></div>
                <div class="card-body">
                    <form>
                            <div class="form-group">
                                <label for="username">Username:</label>
                                <input type="text" class="form-control" id="username" name="username" required/>
                            </div>
                            <br></br>
                            <div class="form-group">
                                <label for="password">Password:</label>
                                <input type="password" class="form-control" id="password" name="password" required/>
                            </div>
                            <br></br>
                            <button type="button" class="btn btn-info container">Login</button>
                        </form>
                </div>
            </div>
        </div>
</div>
  )
}
