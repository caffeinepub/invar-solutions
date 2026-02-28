import Time "mo:core/Time";
import Text "mo:core/Text";
import List "mo:core/List";

actor {
  public type ContactSubmission = {
    name : Text;
    email : Text;
    company : Text;
    message : Text;
    timestamp : Time.Time;
  };

  public type Result = {
    #success;
    #error : Text;
  };

  let contactSubmissions = List.empty<ContactSubmission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, company : Text, message : Text) : async Result {
    if (name == "" or email == "" or message == "") {
      return #error("Name, email, and message fields are required");
    };

    let newSubmission : ContactSubmission = {
      name;
      email;
      company;
      message;
      timestamp = Time.now();
    };

    contactSubmissions.add(newSubmission);
    #success;
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.toArray();
  };
};
