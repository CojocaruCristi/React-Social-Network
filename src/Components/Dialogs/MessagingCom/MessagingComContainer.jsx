import React from "react";
import MessagingCom from "./MessagingCom";
import {addNewMessageActionCreator, changeMessageFieldActionCreator} from "../../../Redux/Reduсers/dialogs-reducer";
import {connect} from "react-redux";




const mapStateToProps = (state) => {
    return {
        hisMessages: state.dialogsData.messages.hisMessages,
        myMessages: state.dialogsData.messages.myMessages,
        messageField: state.dialogsData.messages.messageField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
                        dispatch(addNewMessageActionCreator());
                        dispatch(changeMessageFieldActionCreator(""));
                    },
        changeMessageField: (m) => {
                       dispatch(changeMessageFieldActionCreator(m.target.value));
                    }
    }
}

const MessagingComContainer = connect(mapStateToProps, mapDispatchToProps)(MessagingCom);

export default MessagingComContainer;