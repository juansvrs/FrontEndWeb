import React from 'react'

export const SignUp = () => {
  return (
    <div>
        <div class='container'>
            <div class="card border-info mb-3 col-md-6 mx-auto mt-5">
                <div class="card-header text-center"> Welcome to the family! <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-happy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M9 9l.01 0"></path>
                <path d="M15 9l.01 0"></path>
                <path d="M8 13a4 4 0 1 0 8 0h-8"></path>
                </svg>
                </div>
                <div class="card-body">
                    <form>
                            <div class="form-group">
                                <label for="username">Email:</label>
                                <input type="text" class="form-control" id="email" name="email"/>
                            </div>
                            <br></br>
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
                            <div class="form-group">
                                <label for="password">Confirm password:</label>
                                <input type="password" class="form-control" id="confPassword" name="confPassword" required/>
                            </div>
                            <br></br>
                            <button type="button" class="btn btn-info container">Sign Up</button>
                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}
