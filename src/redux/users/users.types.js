const usersTypes = {
  GET_ALL_USERS_START: "GET_ALL_USERS_START",
  GET_ALL_USERS_SUCCESS: "GET_ALL_USERS_SUCCESS",
  GET_ALL_USERS_FAILURE: "GET_ALL_USERS_FAILURE",
  GET_ALL_STAFF_START: "GET_ALL_STAFF_START",
  GET_ALL_STAFF_SUCCESS: "GET_ALL_STAFF_SUCCESS",
  GET_ALL_STAFF_FAILURE: "GET_ALL_STAFF_FAILURE",
  GET_STUDENTS_START: "GET_STUDENTS_START",
  GET_STUDENTS_SUCCESS: "GET_STUDENTS_SUCCESS",
  GET_STUDENTS_FAILURE: "GET_STUDENTS_FAILURE",
  GET_GUARDIANS_START: "GET_GUARDIANS_START",
  GET_GUARDIANS_SUCCESS: "GET_GUARDIANS_SUCCESS",
  GET_GUARDIANS_FAILURE: "GET_GUARDIANS_FAILURE",
  GET_LECTURERS_START: "GET_LECTURERS_START",
  GET_LECTURERS_SUCCESS: "GET_LECTURERS_SUCCESS",
  GET_LECTURERS_FAILURE: "GET_LECTURERS_FAILURE",
  GET_USER_START: "GET_USER_START",
  GET_USER_SUCCESS: "GET_USER_SUCCESS",
  GET_USER_FAILURE: "GET_USER_FAILURE",
  ADD_STAFF_START: "ADD_STAFF_START",
  ADD_STAFF_SUCCESS: "ADD_STAFF_SUCCESS",
  ADD_STAFF_FAILURE: "ADD_STAFF_FAILURE",
  ADD_STUDENT_START: "ADD_STUDENT_START",
  ADD_STUDENT_SUCCESS: "ADD_STUDENT_SUCCESS",
  ADD_STUDENT_FAILURE: "ADD_STUDENT_FAILURE",
  ADD_LECTURER_START: "ADD_LECTURER_START",
  ADD_LECTURER_SUCCESS: "ADD_LECTURER_SUCCESS",
  ADD_LECTURER_FAILURE: "ADD_LECTURER_FAILURE",
  ADD_GUARDIAN_START: "ADD_GUARDIAN_START",
  ADD_GUARDIAN_SUCCESS: "ADD_GUARDIAN_SUCCESS",
  ADD_GUARDIAN_FAILURE: "ADD_GUARDIAN_FAILURE",
  UPDATE_GUARDIAN_TYPE_START: "UPDATE_GUARDIAN_TYPE_START",
  UPDATE_GUARDIAN_TYPE_SUCCESS: "UPDATE_GUARDIAN_TYPE_SUCCESS",
  UPDATE_GUARDIAN_TYPE_FAILURE: "UPDATE_GUARDIAN_TYPE_FAILURE",
  GET_USER_ACL_START: "GET_USER_ACL_START",
  GET_USER_ACL_SUCCESS: "GET_USER_ACL_SUCCESS",
  GET_USER_ACL_FAILURE: "GET_USER_ACL_FAILURE",
  EDIT_USER_AVATAR_START: "EDIT_USER_AVATAR_START",
  EDIT_USER_AVATAR_SUCCESS: "EDIT_USER_AVATAR_SUCCESS",
  EDIT_USER_AVATAR_FAILURE: "EDIT_USER_AVATAR_FAILURE",
  UPDATE_USER_ACL_START: "UPDATE_USER_ACL_START",
  UPDATE_USER_ACL_SUCCESS: "UPDATE_USER_ACL_SUCCESS",
  UPDATE_USER_ACL_FAILURE: "UPDATE_USER_ACL_FAILURE",
  UPDATE_USER_DETAILS_START: "UPDATE_USER_DETAILS_START",
  UPDATE_USER_DETAILS_SUCCESS: "UPDATE_USER_DETAILS_SUCCESS",
  UPDATE_USER_DETAILS_FAILURE: "UPDATE_USER_DETAILS_FAILURE",
  RESET_PASSWORD_START: "RESET_PASSWORD_START",
  RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_FAILURE: "RESET_PASSWORD_FAILURE",
  LINK_GUARDIAN_AND_STUDENT_START: "LINK_GUARDIAN_AND_STUDENT_START",
  LINK_GUARDIAN_AND_STUDENT_SUCCESS: "LINK_GUARDIAN_AND_STUDENT_SUCCESS",
  LINK_GUARDIAN_AND_STUDENT_FAILURE: "LINK_GUARDIAN_AND_STUDENT_FAILURE",
  DELETE_GUARDIAN_AND_STUDENT_START: "DELETE_GUARDIAN_AND_STUDENT_START",
  DELETE_GUARDIAN_AND_STUDENT_SUCCESS: "DELETE_GUARDIAN_AND_STUDENT_SUCCESS",
  DELETE_GUARDIAN_AND_STUDENT_FAILURE: "DELETE_GUARDIAN_AND_STUDENT_FAILURE",
  GET_STUDENTS_OF_GUARDIAN_START: "GET_STUDENTS_OF_GUARDIAN_START",
  GET_STUDENTS_OF_GUARDIAN_SUCCESS: "GET_STUDENTS_OF_GUARDIAN_SUCCESS",
  GET_STUDENTS_OF_GUARDIAN_FAILURE: "GET_STUDENTS_OF_GUARDIAN_FAILURE",
  GET_GUARDIANS_OF_STUDENT_START: "GET_GUARDIANS_OF_STUDENT_START",
  GET_GUARDIANS_OF_STUDENT_SUCCESS: "GET_GUARDIANS_OF_STUDENT_SUCCESS",
  GET_GUARDIANS_OF_STUDENT_FAILURE: "GET_GUARDIANS_OF_STUDENT_FAILURE",
  UPDATE_STAFF_TYPE_START: "UPDATE_STAFF_TYPE_START",
  UPDATE_STAFF_TYPE_SUCCESS: "UPDATE_STAFF_TYPE_SUCCESS",
  UPDATE_STAFF_TYPE_FAILURE: "UPDATE_STAFF_TYPE_FAILURE",
  EDIT_LECTURER_POSITION_START: "EDIT_LECTURER_POSITION_START",
  EDIT_LECTURER_POSITION_SUCCESS: "EDIT_LECTURER_POSITION_SUCCESS",
  EDIT_LECTURER_POSITION_FAILURE: "EDIT_LECTURER_POSITION_FAILURE",
  DELETE_USER_START: "DELETE_USER_START",
  DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
  DELETE_USER_FAILURE: "DELETE_USER_FAILURE",
  CLEAR_ADD_USER_ERROR_MESSAGE: "CLEAR_ADD_USER_ERROR_MESSAGE",
  CLEAR_RESET_PASSWORD_ERROR_MESSAGE: "CLEAR_RESET_PASSWORD_ERROR_MESSAGE",
  CLEAR_GET_ALL_USERS_ERROR_MESSAGE: "CLEAR_GET_ALL_USERS_ERROR_MESSAGE",
  CLEAR_DELETE_GUARDIAN_AND_STUDENT_ERROR_MESSAGE:
    "CLEAR_DELETE_GUARDIAN_AND_STUDENT_ERROR_MESSAGE",
  CLEAR_UPDATE_GUARDIAN_TYPE_ERROR_MESSAGE:
    "CLEAR_UPDATE_GUARDIAN_TYPE_ERROR_MESSAGE",
  CLEAR_LINK_GUARDIAN_AND_STUDENT_ERROR_MESSAGE:
    "CLEAR_LINK_GUARDIAN_AND_STUDENT_ERROR_MESSAGE",
  CLEAR_EDIT_USER_AVATAR_ERROR_MESSAGE: "CLEAR_EDIT_USER_AVATAR_ERROR_MESSAGE",
  CLEAR_DELETE_USER_ERROR_MESSAGE: "CLEAR_DELETE_USER_ERROR_MESSAGE",
  UPDATE_SELECTED_USER: "UPDATE_SELECTED_USER",
  CLEAR_NEW_PASSWORD: "CLEAR_NEW_PASSWORD",
}

export default usersTypes
