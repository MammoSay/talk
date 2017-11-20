import {createDefaultResponseFragments} from '../utils';

// fragments defined here are automatically registered.
export default {
  ...createDefaultResponseFragments(
    'SetUsernameResponse',
    'SetUserBanStatusResponse',
    'SetUserSuspensionStatusResponse',
    'SetCommentStatusResponse',
    'SuspendUserResponse',
    'SetUsernameStatusResponse',
    'CreateCommentResponse',
    'CreateFlagResponse',
    'EditCommentResponse',
    'PostFlagResponse',
    'CreateDontAgreeResponse',
    'DeleteActionResponse',
    'ModifyTagResponse',
    'IgnoreUserResponse',
    'StopIgnoringUserResponse',
    'UpdateSettingsResponse',
  )
};

