// To parse this data:
//
//   import { Convert, KodiJSONRPC } from "./file";
//
//   const kodiJSONRPC = Convert.toKodiJSONRPC(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface KodiJSONRPC {
    "JSONRPC.Introspect"?:                       AudioLibraryClean;
    "JSONRPC.Version"?:                          JSONRPCVersion;
    "JSONRPC.Permission"?:                       JSONRPCPermission;
    "JSONRPC.Ping"?:                             AudioLibraryClean;
    "JSONRPC.GetConfiguration"?:                 JsonrpcGetConfiguration;
    "JSONRPC.SetConfiguration"?:                 JsonrpcGetConfiguration;
    "JSONRPC.NotifyAll"?:                        JsonrpcNotifyAll;
    "Player.Open"?:                              PlayerOpen;
    "Player.GetActivePlayers"?:                  PlayerGetActivePlayers;
    "Player.GetPlayers"?:                        PlayerGetPlayers;
    "Player.GetProperties"?:                     GetProperties;
    "Player.GetItem"?:                           PlayerGetItem;
    "Player.PlayPause"?:                         JsonrpcGetConfiguration;
    "Player.Stop"?:                              InputExecuteAction;
    "Player.GetAudioDelay"?:                     PlayerEtAudioDelay;
    "Player.SetAudioDelay"?:                     PlayerEtAudioDelay;
    "Player.SetSpeed"?:                          JsonrpcGetConfiguration;
    "Player.SetTempo"?:                          JsonrpcGetConfiguration;
    "Player.Seek"?:                              PlayerSeek;
    "Player.Move"?:                              PlayerMove;
    "Player.Zoom"?:                              AddonsSetAddonEnabled;
    "Player.SetViewMode"?:                       PlayerSetViewMode;
    "Player.GetViewMode"?:                       PlayerGetViewMode;
    "Player.Rotate"?:                            AddonsSetAddonEnabled;
    "Player.GoTo"?:                              PVRScan;
    "Player.SetShuffle"?:                        InputExecuteAction;
    "Player.SetRepeat"?:                         PVRRecord;
    "Player.SetPartymode"?:                      InputExecuteAction;
    "Player.SetAudioStream"?:                    PlayerSetOStream;
    "Player.SetVideoStream"?:                    PlayerSetOStream;
    "Player.AddSubtitle"?:                       AddonsSetAddonEnabled;
    "Player.SetSubtitle"?:                       PlayerSetSubtitle;
    "Playlist.GetPlaylists"?:                    PlaylistGetPlaylists;
    "Playlist.GetProperties"?:                   GetProperties;
    "Playlist.GetItems"?:                        PlaylistGetItems;
    "Playlist.Add"?:                             Playlist;
    "Playlist.Insert"?:                          Playlist;
    "Playlist.Remove"?:                          InputExecuteAction;
    "Playlist.Clear"?:                           InputExecuteAction;
    "Playlist.Swap"?:                            InputExecuteAction;
    "Files.GetSources"?:                         FilesGetSources;
    "Files.PrepareDownload"?:                    FilesPrepareDownload;
    "Files.Download"?:                           FilesDownload;
    "Files.GetDirectory"?:                       FilesGetDirectory;
    "Files.GetFileDetails"?:                     FilesGetFileDetails;
    "Files.SetFileDetails"?:                     FilesSetFileDetails;
    "AudioLibrary.GetProperties"?:               GetProperties;
    "AudioLibrary.GetArtists"?:                  AudioLibraryGetArtists;
    "AudioLibrary.GetArtistDetails"?:            AudioLibraryGetArtistDetails;
    "AudioLibrary.GetAlbums"?:                   AudioLibraryGetAlbums;
    "AudioLibrary.GetAlbumDetails"?:             AudioLibraryGetAlbumDetails;
    "AudioLibrary.GetSongs"?:                    AudioLibraryGetSongs;
    "AudioLibrary.GetSongDetails"?:              AudioLibraryGetSongDetails;
    "AudioLibrary.GetRecentlyAddedAlbums"?:      AudioLibraryGetRecentlyEdAlbums;
    "AudioLibrary.GetRecentlyAddedSongs"?:       AudioLibraryGetRecentlyAddedSongs;
    "AudioLibrary.GetRecentlyPlayedAlbums"?:     AudioLibraryGetRecentlyEdAlbums;
    "AudioLibrary.GetRecentlyPlayedSongs"?:      AudioLibraryGetRecentlyPlayedSongs;
    "AudioLibrary.GetGenres"?:                   AudioLibraryGetGenres;
    "AudioLibrary.GetSources"?:                  AudioLibraryGetSources;
    "AudioLibrary.GetRoles"?:                    AudioLibraryGetRoles;
    "AudioLibrary.GetAvailableArtTypes"?:        AudioLibraryGetAvailableArtTypes;
    "AudioLibrary.GetAvailableArt"?:             AudioLibraryGetAvailableArt;
    "AudioLibrary.SetArtistDetails"?:            Details;
    "AudioLibrary.SetAlbumDetails"?:             Details;
    "AudioLibrary.SetSongDetails"?:              Details;
    "AudioLibrary.Scan"?:                        AudioLibraryScan;
    "AudioLibrary.Export"?:                      AudioLibraryExport;
    "AudioLibrary.Clean"?:                       AudioLibraryClean;
    "VideoLibrary.GetMovies"?:                   VideoLibraryGetMovies;
    "VideoLibrary.GetMovieDetails"?:             VideoLibraryGetMovieDetails;
    "VideoLibrary.GetMovieSets"?:                VideoLibraryGetMovieSets;
    "VideoLibrary.GetMovieSetDetails"?:          VideoLibraryGetMovieSetDetails;
    "VideoLibrary.GetTVShows"?:                  VideoLibraryGetTVShows;
    "VideoLibrary.GetTVShowDetails"?:            VideoLibraryGetTVShowDetails;
    "VideoLibrary.GetSeasons"?:                  VideoLibraryGetSeasons;
    "VideoLibrary.GetSeasonDetails"?:            VideoLibraryGetSeasonDetails;
    "VideoLibrary.GetEpisodes"?:                 VideoLibraryGetEpisodes;
    "VideoLibrary.GetEpisodeDetails"?:           VideoLibraryGetEpisodeDetails;
    "VideoLibrary.GetMusicVideos"?:              VideoLibraryGetMusicVideos;
    "VideoLibrary.GetMusicVideoDetails"?:        VideoLibraryGetMusicVideoDetails;
    "VideoLibrary.GetRecentlyAddedMovies"?:      VideoLibraryGetRecentlyAddedMovies;
    "VideoLibrary.GetRecentlyAddedEpisodes"?:    VideoLibraryGetRecentlyAddedEpisodes;
    "VideoLibrary.GetRecentlyAddedMusicVideos"?: VideoLibraryGetRecentlyAddedMusicVideos;
    "VideoLibrary.GetInProgressTVShows"?:        VideoLibraryGetInProgressTVShows;
    "VideoLibrary.GetGenres"?:                   VideoLibraryGetGenres;
    "VideoLibrary.GetTags"?:                     VideoLibraryGetTags;
    "VideoLibrary.GetAvailableArtTypes"?:        VideoLibraryGetAvailableArtTypes;
    "VideoLibrary.GetAvailableArt"?:             VideoLibraryGetAvailableArt;
    "VideoLibrary.SetMovieDetails"?:             Details;
    "VideoLibrary.SetMovieSetDetails"?:          Details;
    "VideoLibrary.SetTVShowDetails"?:            Details;
    "VideoLibrary.SetSeasonDetails"?:            Details;
    "VideoLibrary.SetEpisodeDetails"?:           Details;
    "VideoLibrary.SetMusicVideoDetails"?:        Details;
    "VideoLibrary.RefreshMovie"?:                VideoLibraryRefresh;
    "VideoLibrary.RefreshTVShow"?:               VideoLibraryRefresh;
    "VideoLibrary.RefreshEpisode"?:              VideoLibraryRefresh;
    "VideoLibrary.RefreshMusicVideo"?:           VideoLibraryRefresh;
    "VideoLibrary.RemoveMovie"?:                 InputExecuteAction;
    "VideoLibrary.RemoveTVShow"?:                InputExecuteAction;
    "VideoLibrary.RemoveEpisode"?:               InputExecuteAction;
    "VideoLibrary.RemoveMusicVideo"?:            InputExecuteAction;
    "VideoLibrary.Scan"?:                        AudioLibraryScan;
    "VideoLibrary.Export"?:                      AudioLibraryExport;
    "VideoLibrary.Clean"?:                       AudioLibraryScan;
    "GUI.ActivateWindow"?:                       GUIActivateWindow;
    "GUI.ShowNotification"?:                     GUIShowNotification;
    "GUI.GetProperties"?:                        GetProperties;
    "GUI.SetFullscreen"?:                        ApplicationSetMute;
    "GUI.SetStereoscopicMode"?:                  AddonsSetAddonEnabled;
    "GUI.GetStereoscopicModes"?:                 GUIGetStereoscopicModes;
    "GUI.ActivateScreenSaver"?:                  AddonsSetAddonEnabled;
    "Addons.GetAddons"?:                         AddonsGetAddons;
    "Addons.GetAddonDetails"?:                   AddonsGetAddonDetails;
    "Addons.SetAddonEnabled"?:                   AddonsSetAddonEnabled;
    "Addons.ExecuteAddon"?:                      AddonsExecuteAddon;
    "PVR.GetProperties"?:                        GetProperties;
    "PVR.GetChannelGroups"?:                     PVRGetChannelGroups;
    "PVR.GetChannelGroupDetails"?:               PVRGetChannelGroupDetails;
    "PVR.GetChannels"?:                          PVRGetChannels;
    "PVR.GetChannelDetails"?:                    PVRGetChannelDetails;
    "PVR.GetClients"?:                           PVRGetClients;
    "PVR.GetBroadcasts"?:                        PVRGetBroadcasts;
    "PVR.GetBroadcastDetails"?:                  PVRGetBroadcastDetails;
    "PVR.GetBroadcastIsPlayable"?:               PVRDeleteTimer;
    "PVR.GetTimers"?:                            PVRGetTimers;
    "PVR.GetTimerDetails"?:                      PVRGetTimerDetails;
    "PVR.AddTimer"?:                             AudioLibraryClean;
    "PVR.DeleteTimer"?:                          PVRDeleteTimer;
    "PVR.ToggleTimer"?:                          AudioLibraryClean;
    "PVR.GetRecordings"?:                        PVRGetRecordings;
    "PVR.GetRecordingDetails"?:                  PVRGetRecordingDetails;
    "PVR.Record"?:                               PVRRecord;
    "PVR.Scan"?:                                 PVRScan;
    "Textures.GetTextures"?:                     TexturesGetTextures;
    "Textures.RemoveTexture"?:                   PVRDeleteTimer;
    "Profiles.GetProfiles"?:                     ProfilesGetProfiles;
    "Profiles.GetCurrentProfile"?:               ProfilesGetCurrentProfile;
    "Profiles.LoadProfile"?:                     FavouritesAddFavourite;
    "System.GetProperties"?:                     GetProperties;
    "System.EjectOpticalDrive"?:                 AddonsSetAddonEnabled;
    "System.Shutdown"?:                          PVRDeleteTimer;
    "System.Suspend"?:                           PVRDeleteTimer;
    "System.Hibernate"?:                         PVRDeleteTimer;
    "System.Reboot"?:                            PVRDeleteTimer;
    "Input.SendText"?:                           AudioLibraryClean;
    "Input.ExecuteAction"?:                      InputExecuteAction;
    "Input.ButtonEvent"?:                        InputButtonEvent;
    "Input.Left"?:                               AudioLibraryClean;
    "Input.Right"?:                              AudioLibraryExport;
    "Input.Down"?:                               ApplicationSetVolume;
    "Input.Up"?:                                 AudioLibraryClean;
    "Input.Select"?:                             AudioLibraryExport;
    "Input.Back"?:                               AddonsExecuteAddon;
    "Input.ContextMenu"?:                        ApplicationSetVolume;
    "Input.Info"?:                               AudioLibraryClean;
    "Input.Home"?:                               AudioLibraryClean;
    "Input.ShowCodec"?:                          AudioLibraryClean;
    "Input.ShowOSD"?:                            AudioLibraryClean;
    "Input.ShowPlayerProcessInfo"?:              AudioLibraryClean;
    "Application.GetProperties"?:                GetProperties;
    "Application.SetVolume"?:                    ApplicationSetVolume;
    "Application.SetMute"?:                      ApplicationSetMute;
    "Application.Quit"?:                         AddonsExecuteAddon;
    "XBMC.GetInfoLabels"?:                       XbmcGetInfo;
    "XBMC.GetInfoBooleans"?:                     XbmcGetInfo;
    "Favourites.GetFavourites"?:                 FavouritesGetFavourites;
    "Favourites.AddFavourite"?:                  FavouritesAddFavourite;
    "Settings.GetSections"?:                     SettingsGetSections;
    "Settings.GetCategories"?:                   SettingsGetCategories;
    "Settings.GetSettings"?:                     SettingsGetSettings;
    "Settings.GetSettingValue"?:                 SettingsGetSettingValue;
    "Settings.SetSettingValue"?:                 JsonrpcNotifyAll;
    "Settings.ResetSettingValue"?:               SettingsResetSettingValue;
    "Settings.GetSkinSettingValue"?:             SettingsGetSkinSettingValue;
    "Settings.SetSkinSettingValue"?:             SettingsSetSkinSettingValue;
    "Settings.GetSkinSettings"?:                 SettingsGetSkinSettings;
    "Optional.Boolean"?:                         Optional;
    "Optional.String"?:                          Optional;
    "Optional.Integer"?:                         Optional;
    "Optional.Number"?:                          Optional;
    "Array.String"?:                             ArrayString;
    "Array.Integer"?:                            ArrayInteger;
    "Global.Time"?:                              Time;
    "Global.Weekday"?:                           ApplicationPropertyName;
    "Global.IncrementDecrement"?:                ApplicationPropertyName;
    "Global.Toggle"?:                            GlobalToggle;
    "Global.String.NotEmpty"?:                   GlobalStringNotEmpty;
    "Configuration.Notifications"?:              ConfigurationNotifications;
    Configuration?:                              Configuration;
    "Files.Media"?:                              ApplicationPropertyName;
    "List.Amount"?:                              LibraryID;
    "List.Limits"?:                              ListLimits;
    "List.LimitsReturned"?:                      ListLimitsReturned;
    "List.Sort"?:                                ListSort;
    "Library.Id"?:                               LibraryID;
    "PVR.Channel.Type"?:                         ApplicationPropertyName;
    "Playlist.Id"?:                              LibraryID;
    "Playlist.Type"?:                            ApplicationPropertyName;
    "Playlist.Property.Name"?:                   ApplicationPropertyName;
    "Playlist.Property.Value"?:                  PlaylistPropertyValue;
    "Playlist.Position"?:                        LibraryID;
    "Playlist.Item"?:                            PlaylistItem;
    "Player.Id"?:                                LibraryID;
    "Player.Type"?:                              ApplicationPropertyName;
    "Player.Position.Percentage"?:               LibraryID;
    "Player.Position.Time"?:                     Time;
    "Player.Speed"?:                             PlayerSpeed;
    "Player.Tempo"?:                             PlayerTempo;
    "Player.ViewMode"?:                          ApplicationPropertyName;
    "Player.CustomViewMode"?:                    PlayerCustomViewMode;
    "Player.Repeat"?:                            ApplicationPropertyName;
    "Player.Audio.Stream"?:                      PlayerAudioStream;
    "Player.Video.Stream"?:                      PlayerVideoStream;
    "Player.Subtitle"?:                          PlayerSubtitle;
    "Player.Property.Name"?:                     ApplicationPropertyName;
    "Player.Property.Value"?:                    PlayerPropertyValue;
    "Notifications.Item.Type"?:                  ApplicationPropertyName;
    "Notifications.Item"?:                       NotificationsItem;
    "Player.Notifications.Player"?:              PlayerNotificationsPlayer;
    "Player.Notifications.Player.Seek"?:         PlayerNotificationsPlayerSeek;
    "Player.Notifications.Data"?:                PlayerNotificationsData;
    "Item.Fields.Base"?:                         ItemFieldsBase;
    "Item.Details.Base"?:                        ItemDetailsBase;
    "Item.CustomProperties"?:                    ItemCustomProperties;
    "Media.Details.Base"?:                       MediaDetailsBase;
    "Media.Artwork"?:                            MediaArtwork;
    "Media.Artwork.Set"?:                        MediaArtworkSet;
    "Video.Rating"?:                             VideoRating;
    "Video.Ratings"?:                            ItemCustomProperties;
    "Video.Ratings.Set"?:                        Set;
    "Media.UniqueID"?:                           ItemCustomProperties;
    "Media.UniqueID.Set"?:                       Set;
    "Library.Fields.Source"?:                    AddonFields;
    "Library.Details.Source"?:                   LibraryDetailsSource;
    "Library.Fields.Genre"?:                     AddonFields;
    "Library.Details.Genre"?:                    LibraryDetailsGenre;
    "Library.Fields.Tag"?:                       AddonFields;
    "Library.Details.Tag"?:                      LibraryDetailsTag;
    "Audio.Fields.Role"?:                        AddonFields;
    "Audio.Details.Role"?:                       AudioDetailsRole;
    "Audio.Fields.Artist"?:                      AudioFieldsAlbum;
    "Audio.Fields.Album"?:                       AudioFieldsAlbum;
    "Audio.Fields.Song"?:                        AudioFieldsAlbum;
    "Audio.Album.ReleaseType"?:                  AddonContent;
    "Audio.Contributors"?:                       AudioContributors;
    "Audio.Artist.Roles"?:                       AudioArtistRoles;
    "Audio.Details.Genres"?:                     AudioDetailsGenres;
    "Audio.Details.Base"?:                       AudioDetailsBase;
    "Audio.Details.Media"?:                      AudioDetailsMedia;
    "Audio.Details.Artist"?:                     AudioDetailsArtist;
    "Audio.Details.Album"?:                      AudioDetailsAlbum;
    "Audio.Details.Song"?:                       AudioDetailsSong;
    "Audio.Property.Name"?:                      ApplicationPropertyName;
    "Audio.Property.Value"?:                     AudioPropertyValue;
    "Video.Fields.Movie"?:                       AudioFieldsAlbum;
    "Video.Fields.MovieSet"?:                    AddonFields;
    "Video.Fields.TVShow"?:                      AudioFieldsAlbum;
    "Video.Fields.Season"?:                      AddonFields;
    "Video.Fields.Episode"?:                     AudioFieldsAlbum;
    "Video.Fields.MusicVideo"?:                  AudioFieldsAlbum;
    "Video.Cast"?:                               VideoCast;
    "Video.Streams"?:                            VideoStreams;
    "Video.Resume"?:                             VideoResume;
    "Video.Details.Base"?:                       VideoDetailsBase;
    "Video.Details.Media"?:                      VideoDetailsMedia;
    "Video.Details.Item"?:                       VideoDetailsItem;
    "Video.Details.File"?:                       VideoDetailsFile;
    "Video.Details.Movie"?:                      VideoDetailsMovie;
    "Video.Details.MovieSet"?:                   VideoDetailsMovieSet;
    "Video.Details.MovieSet.Extended"?:          VideoDetailsMovieSetExtended;
    "Video.Details.TVShow"?:                     VideoDetailsTVShow;
    "Video.Details.Season"?:                     VideoDetailsSeason;
    "Video.Details.Episode"?:                    VideoDetailsEpisode;
    "Video.Details.MusicVideo"?:                 VideoDetailsMusicVideo;
    "PVR.Property.Name"?:                        ApplicationPropertyName;
    "PVR.Property.Value"?:                       PVRPropertyValue;
    "PVR.ChannelGroup.Id"?:                      PVRChannelGroupID;
    "PVR.Fields.Broadcast"?:                     AddonFields;
    "PVR.Details.Broadcast"?:                    PVRDetailsBroadcast;
    "PVR.Fields.Channel"?:                       AddonFields;
    "PVR.Details.Channel"?:                      PVRDetailsChannel;
    "PVR.Details.ChannelGroup"?:                 PVRDetailsChannelGroup;
    "PVR.Details.ChannelGroup.Extended"?:        PVRDetailsChannelGroupExtended;
    "PVR.Fields.Client"?:                        AddonFields;
    "PVR.Details.Client"?:                       PVRDetailsClient;
    "PVR.TimerState"?:                           ApplicationPropertyName;
    "PVR.Fields.Timer"?:                         AddonFields;
    "PVR.Details.Timer"?:                        PVRDetailsTimer;
    "PVR.Fields.Recording"?:                     AddonFields;
    "PVR.Details.Recording"?:                    PVRDetailsRecording;
    "Textures.Details.Size"?:                    TexturesDetailsSize;
    "Textures.Fields.Texture"?:                  AddonFields;
    "Textures.Details.Texture"?:                 TexturesDetailsTexture;
    "Profiles.Password"?:                        ProfilesPassword;
    "Profiles.Fields.Profile"?:                  AddonFields;
    "Profiles.Details.Profile"?:                 ProfilesDetailsProfile;
    "List.Filter.Rule"?:                         ListFilterRule;
    "List.Filter.Rule.Movies"?:                  ListFilterRuleAlbumsClass;
    "List.Filter.Rule.TVShows"?:                 ListFilterRuleAlbumsClass;
    "List.Filter.Rule.Episodes"?:                ListFilterRuleAlbumsClass;
    "List.Filter.Rule.MusicVideos"?:             ListFilterRuleAlbumsClass;
    "List.Filter.Rule.Artists"?:                 ListFilterRuleAlbumsClass;
    "List.Filter.Rule.Albums"?:                  ListFilterRuleAlbumsClass;
    "List.Filter.Rule.Songs"?:                   ListFilterRuleAlbumsClass;
    "List.Filter.Rule.Textures"?:                ListFilterRuleAlbumsClass;
    "List.Filter.Movies"?:                       ListFilter;
    "List.Filter.TVShows"?:                      ListFilter;
    "List.Filter.Episodes"?:                     ListFilter;
    "List.Filter.MusicVideos"?:                  ListFilter;
    "List.Filter.Artists"?:                      ListFilter;
    "List.Filter.Albums"?:                       ListFilter;
    "List.Filter.Songs"?:                        ListFilter;
    "List.Filter.Textures"?:                     ListFilter;
    "List.Item.Base"?:                           ListItemBase;
    "List.Fields.All"?:                          AddonFields;
    "List.Item.All"?:                            ListItemAll;
    "List.Fields.Files"?:                        AddonFields;
    "List.Item.File"?:                           ListItemFile;
    "List.Items.Sources"?:                       ListItemsSources;
    "Addon.Content"?:                            AddonContent;
    "Addon.Fields"?:                             AddonFields;
    "Addon.Details"?:                            AddonDetails;
    "GUI.Stereoscopy.Mode"?:                     GUIStereoscopyMode;
    "GUI.Property.Name"?:                        ApplicationPropertyName;
    "GUI.Property.Value"?:                       GUIPropertyValue;
    "System.Property.Name"?:                     ApplicationPropertyName;
    "System.Property.Value"?:                    SystemPropertyValue;
    "Application.Property.Name"?:                ApplicationPropertyName;
    "Application.Property.Value"?:               ApplicationPropertyValue;
    "Favourite.Fields.Favourite"?:               AddonFields;
    "Favourite.Type"?:                           ApplicationPropertyName;
    "Favourite.Details.Favourite"?:              FavouriteDetailsFavourite;
    "Setting.Type"?:                             ApplicationPropertyName;
    "Setting.Level"?:                            ApplicationPropertyName;
    "Setting.Value"?:                            SettingValue;
    "Setting.Value.List"?:                       SettingValueList;
    "Setting.Value.Extended"?:                   GlobalToggle;
    "Setting.Details.ControlBase"?:              SettingDetailsControlBase;
    "Setting.Details.ControlCheckmark"?:         SettingDetailsControl;
    "Setting.Details.ControlSpinner"?:           SettingDetailsControlSpinner;
    "Setting.Details.ControlHeading"?:           SettingDetailsControlHeading;
    "Setting.Details.ControlEdit"?:              SettingDetailsControlEdit;
    "Setting.Details.ControlButton"?:            SettingDetailsControlButton;
    "Setting.Details.ControlList"?:              SettingDetailsControlList;
    "Setting.Details.ControlSlider"?:            SettingDetailsControlSlider;
    "Setting.Details.ControlRange"?:             SettingDetailsControlRange;
    "Setting.Details.ControlLabel"?:             SettingDetailsControl;
    "Setting.Details.Control"?:                  SettingDetails;
    "Setting.Details.Base"?:                     SettingDetailsBase;
    "Setting.Details.SettingBase"?:              SettingDetailsSettingBase;
    "Setting.Details.SettingBool"?:              SettingDetailsSettingBool;
    "Setting.Details.SettingInt"?:               SettingDetailsSettingInt;
    "Setting.Details.SettingNumber"?:            SettingDetailsSettingNumber;
    "Setting.Details.SettingString"?:            SettingDetailsSettingString;
    "Setting.Details.SettingAction"?:            SettingDetailsSettingAction;
    "Setting.Details.SettingList"?:              SettingDetailsSettingList;
    "Setting.Details.SettingPath"?:              SettingDetailsSettingPath;
    "Setting.Details.SettingAddon"?:             SettingDetailsSettingAddon;
    "Setting.Details.SettingDate"?:              SettingDetailsSetting;
    "Setting.Details.SettingTime"?:              SettingDetailsSetting;
    "Setting.Details.Setting"?:                  SettingDetails;
    "Setting.Details.Group"?:                    SettingDetailsGroup;
    "Setting.Details.Category"?:                 SettingDetailsCategory;
    "Setting.Details.Section"?:                  SettingDetailsSection;
    "Player.OnPlay"?:                            PlayerOn;
    "Player.OnResume"?:                          PlayerOn;
    "Player.OnAVStart"?:                         PlayerOn;
    "Player.OnAVChange"?:                        PlayerOn;
    "Player.OnPause"?:                           PlayerOn;
    "Player.OnStop"?:                            ApplicationOnVolumeChanged;
    "Player.OnSpeedChanged"?:                    PlayerOn;
    "Player.OnSeek"?:                            Play;
    "Player.OnPropertyChanged"?:                 ApplicationOnVolumeChanged;
    "Playlist.OnAdd"?:                           PlaylistOnAdd;
    "Playlist.OnRemove"?:                        ApplicationOnVolumeChanged;
    "Playlist.OnClear"?:                         Play;
    "AudioLibrary.OnUpdate"?:                    ApplicationOnVolumeChanged;
    "AudioLibrary.OnRemove"?:                    OLibraryOnRemove;
    "AudioLibrary.OnScanStarted"?:               AudioLibraryOnCleanFinished;
    "AudioLibrary.OnScanFinished"?:              AudioLibraryOnCleanFinished;
    "AudioLibrary.OnCleanStarted"?:              AudioLibraryOnCleanFinished;
    "AudioLibrary.OnCleanFinished"?:             AudioLibraryOnCleanFinished;
    "AudioLibrary.OnExport"?:                    ApplicationOnVolumeChanged;
    "VideoLibrary.OnUpdate"?:                    SystemOnQuit;
    "VideoLibrary.OnExport"?:                    VideoLibraryOnExport;
    "VideoLibrary.OnRemove"?:                    OLibraryOnRemove;
    "VideoLibrary.OnScanStarted"?:               AudioLibraryOnCleanFinished;
    "VideoLibrary.OnScanFinished"?:              AudioLibraryOnCleanFinished;
    "VideoLibrary.OnCleanStarted"?:              AudioLibraryOnCleanFinished;
    "VideoLibrary.OnCleanFinished"?:             AudioLibraryOnCleanFinished;
    "VideoLibrary.OnRefresh"?:                   AudioLibraryOnCleanFinished;
    "System.OnQuit"?:                            SystemOnQuit;
    "System.OnRestart"?:                         AudioLibraryOnCleanFinished;
    "System.OnSleep"?:                           AudioLibraryOnCleanFinished;
    "System.OnWake"?:                            AudioLibraryOnCleanFinished;
    "System.OnLowBattery"?:                      AudioLibraryOnCleanFinished;
    "Application.OnVolumeChanged"?:              ApplicationOnVolumeChanged;
    "Input.OnInputRequested"?:                   ApplicationOnVolumeChanged;
    "Input.OnInputFinished"?:                    AudioLibraryOnCleanFinished;
    "GUI.OnScreensaverActivated"?:               AudioLibraryOnCleanFinished;
    "GUI.OnScreensaverDeactivated"?:             ApplicationOnVolumeChanged;
    "GUI.OnDPMSActivated"?:                      AudioLibraryOnCleanFinished;
    "GUI.OnDPMSDeactivated"?:                    AudioLibraryOnCleanFinished;
}

export interface AddonContent {
    type:         ReturnsElement;
    enum:         string[];
    default?:     string;
    name?:        string;
    description?: string;
}

export enum ReturnsElement {
    Any = "any",
    Array = "array",
    Boolean = "boolean",
    Integer = "integer",
    Null = "null",
    Number = "number",
    Object = "object",
    String = "string",
    TypeInteger = "Integer",
    VideoRatings = "Video.Ratings",
}

export interface AddonDetails {
    extends:    string;
    properties: AddonDetailsProperties;
}

export interface AddonDetailsProperties {
    addonid:      ReturnsValue;
    type:         AlbumidElement;
    name:         AuthorClass;
    version:      AuthorClass;
    summary:      AuthorClass;
    description:  AuthorClass;
    path:         AuthorClass;
    author:       AuthorClass;
    thumbnail:    AuthorClass;
    disclaimer:   AuthorClass;
    fanart:       AuthorClass;
    dependencies: Dependencies;
    broken:       Broken;
    extrainfo:    Extrainfo;
    rating:       AuthorClass;
    enabled:      AuthorClass;
    installed:    AuthorClass;
    deprecated:   Broken;
}

export interface ReturnsValue {
    type:     ReturnsElement;
    required: boolean;
}

export interface AuthorClass {
    type: ReturnsElement;
}

export interface Broken {
    type: ReturnsElement[];
}

export interface Dependencies {
    type:  ReturnsElement;
    items: DependenciesItems;
}

export interface DependenciesItems {
    type:       ReturnsElement;
    properties: PurpleProperties;
}

export interface PurpleProperties {
    addonid:  ReturnsValue;
    version:  ReturnsValue;
    optional: ReturnsValue;
}

export interface Extrainfo {
    type:  ReturnsElement;
    items: ExtrainfoItems;
}

export interface ExtrainfoItems {
    type:       ReturnsElement;
    properties: FluffyProperties;
}

export interface FluffyProperties {
    key:   ReturnsValue;
    value: ReturnsValue;
}

export interface AlbumidElement {
    $ref:     string;
    required: boolean;
}

export interface AddonFields {
    extends: Extends;
    items:   ApplicationPropertyName;
}

export enum Extends {
    ItemFieldsBase = "Item.Fields.Base",
}

export interface ApplicationPropertyName {
    type:  ReturnsElement;
    enum?: string[];
}

export interface AddonsExecuteAddon {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AddonsExecuteAddonParam[];
    returns:     ReturnsElement;
}

export interface AddonsExecuteAddonParam {
    name:      string;
    type:      TypeReturns[] | ReturnsElement;
    required?: boolean;
    default?:  boolean | string;
}

export interface TypeReturns {
    type:                  ReturnsElement;
    additionalProperties?: AuthorClass;
    items?:                AuthorClass;
    description?:          string;
}

export enum Transport {
    Response = "Response",
}

export enum AddonsExecuteAddonType {
    Method = "method",
}

export interface AddonsGetAddonDetails {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AddonsGetAddonDetailsParam[];
    returns:     AddonsGetAddonDetailsReturns;
}

export interface AddonsGetAddonDetailsParam {
    name?:        string;
    type?:        PurpleType[] | ReturnsElement;
    required?:    boolean;
    $ref?:        string;
    properties?:  TentacledProperties;
    description?: string;
    default?:     string;
    enum?:        string[];
    items?:       AdditionalProperties;
}

export interface AdditionalProperties {
    $ref: string;
}

export interface TentacledProperties {
    volume?:       LibraryID;
    muted?:        ReturnsValue;
    file?:         FileElement;
    failcount?:    LibraryID;
    id?:           AlbumidElement;
    type?:         PropertiesType;
    transaction?:  Sorttokens;
    added?:        Sorttokens;
    shuttingdown?: ReturnsValue;
    value?:        ReturnsValue;
    title?:        AuthorClass;
    properties?:   AdditionalProperties;
    limits?:       AdditionalProperties;
    property?:     AdditionalProperties;
    player?:       AlbumidElement;
    item?:         AdditionalProperties;
    end?:          Language;
    playlistid?:   AlbumidElement;
    position?:     AdditionalProperties;
}

export interface Sorttokens {
    $ref:        string;
    description: string;
}

export interface LanguageProperties {
    exitcode?:    LibraryID;
    id?:          AlbumidElement;
    type?:        Language;
    playcount?:   LibraryID;
    transaction?: Sorttokens;
    added?:       Sorttokens;
}

export interface Language {
    type?:        ReturnsElement;
    minLength?:   number;
    description?: string;
    required?:    boolean;
    enum?:        string[];
    $ref?:        string;
    minimum?:     number;
    name?:        string;
    properties?:  LanguageProperties;
    id?:          string;
}

export interface LibraryID {
    type?:        ReturnsElement;
    minimum?:     number;
    maximum?:     number;
    required?:    boolean;
    $ref?:        string;
    default?:     number;
    description?: string;
    enum?:        string[];
}

export interface FileElement {
    type?:       ReturnsElement;
    required?:   boolean;
    default?:    null | string;
    name?:       string;
    $ref?:       string;
    properties?: RootProperties;
    enum?:       Array<number | string>;
    minLength?:  number;
}

export interface RootProperties {
    item?:        AdditionalProperties;
    player?:      AlbumidElement;
    playlistid?:  AlbumidElement;
    properties?:  AdditionalProperties;
    limits?:      AdditionalProperties;
    sort?:        AdditionalProperties;
    id?:          AlbumidElement;
    type?:        AlbumidElement;
    transaction?: Sorttokens;
}

export interface PropertiesType {
    $ref?:    string;
    required: boolean;
    type?:    ReturnsElement;
    id?:      string;
    enum?:    string[];
}

export interface PurpleType {
    type?:        ReturnsElement;
    enum?:        string[];
    required:     boolean;
    minimum?:     number;
    maximum?:     number;
    description?: string;
    $ref?:        string;
    items?:       AdditionalProperties;
}

export interface AddonsGetAddonDetailsReturns {
    type:       ReturnsElement;
    properties: StickyProperties;
}

export interface StickyProperties {
    limits: AlbumidElement;
    addon:  AlbumidElement;
}

export interface AddonsGetAddons {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AddonsGetAddonsParam[];
    returns:     AddonsGetAddonsReturns;
}

export interface AddonsGetAddonsParam {
    name:         string;
    $ref?:        string;
    description?: string;
    type?:        ApplicationPropertyName[];
    default?:     boolean | string;
}

export interface AddonsGetAddonsReturns {
    type:       ReturnsElement;
    properties: IndigoProperties;
}

export interface IndigoProperties {
    limits: AlbumidElement;
    addons: SettingValueList;
}

export interface SettingValueList {
    type:  ReturnsElement;
    items: AdditionalProperties;
}

export interface AddonsSetAddonEnabled {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AddonsGetAddonDetailsParam[];
    returns:     ReturnsElement;
}

export interface GetProperties {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      ApplicationGetPropertiesParam[];
    returns:     AlbumidElement;
}

export interface ApplicationGetPropertiesParam {
    name:         string;
    type?:        ReturnsElement;
    uniqueItems?: boolean;
    required:     boolean;
    items?:       AdditionalProperties;
    $ref?:        ParamRef;
}

export enum ParamRef {
    GlobalToggle = "Global.Toggle",
    InputAction = "Input.Action",
    LibraryID = "Library.Id",
    OptionalBoolean = "Optional.Boolean",
    OptionalInteger = "Optional.Integer",
    OptionalNumber = "Optional.Number",
    OptionalString = "Optional.String",
    PlayerID = "Player.Id",
    PlaylistID = "Playlist.Id",
    PlaylistPosition = "Playlist.Position",
    SettingLevel = "Setting.Level",
    VideoFieldsMusicVideo = "Video.Fields.MusicVideo",
    VideoRatingsSet = "Video.Ratings.Set",
}

export interface ApplicationOnVolumeChanged {
    type:        ApplicationOnVolumeChangedType;
    description: string;
    params:      AddonsGetAddonDetailsParam[];
    returns:     null;
}

export enum ApplicationOnVolumeChangedType {
    Notification = "notification",
}

export interface ApplicationPropertyValue {
    type:       ReturnsElement;
    properties: ApplicationPropertyValueProperties;
}

export interface ApplicationPropertyValueProperties {
    volume:     LibraryID;
    muted:      AuthorClass;
    name:       GlobalStringNotEmpty;
    version:    PurpleVersion;
    sorttokens: Sorttokens;
    language:   Language;
}

export interface GlobalStringNotEmpty {
    type:      ReturnsElement;
    minLength: number;
}

export interface PurpleVersion {
    type:       ReturnsElement;
    properties: IndecentProperties;
}

export interface IndecentProperties {
    major:      LibraryID;
    minor:      LibraryID;
    revision:   Broken;
    tag:        Filetype;
    tagversion: AuthorClass;
}

export interface Filetype {
    type?:        ReturnsElement;
    enum?:        string[];
    required?:    boolean;
    id?:          string;
    $ref?:        string;
    description?: string;
    name?:        string;
    minLength?:   number;
}

export interface ApplicationSetMute {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AddonsGetAddonDetailsParam[];
    returns:     DynpathClass;
}

export interface DynpathClass {
    type:        ReturnsElement;
    description: string;
}

export interface ApplicationSetVolume {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  Permission;
    params:      ApplicationSetVolumeParam[];
    returns:     ReturnsElement;
}

export interface ApplicationSetVolumeParam {
    name:     string;
    type:     LibraryID[];
    required: boolean;
}

export enum Permission {
    ControlPlayback = "ControlPlayback",
    Navigate = "Navigate",
    RemoveData = "RemoveData",
}

export interface ArrayInteger {
    type:  ReturnsElement;
    items: AuthorClass;
}

export interface ArrayString {
    type:  ReturnsElement;
    items: GlobalStringNotEmpty;
}

export interface AudioArtistRoles {
    type:  ReturnsElement;
    items: AudioArtistRolesItems;
}

export interface AudioArtistRolesItems {
    type:                 ReturnsElement;
    description:          string;
    properties:           HilariousProperties;
    additionalProperties: boolean;
}

export interface HilariousProperties {
    roleid: AlbumidElement;
    role:   ReturnsValue;
}

export interface AudioContributors {
    type:  ReturnsElement;
    items: AudioContributorsItems;
}

export interface AudioContributorsItems {
    type:                 ReturnsElement;
    description:          string;
    properties:           AmbitiousProperties;
    additionalProperties: boolean;
}

export interface AmbitiousProperties {
    name:     ReturnsValue;
    role:     ReturnsValue;
    roleid:   AlbumidElement;
    artistid: AlbumidElement;
}

export interface AudioDetailsAlbum {
    extends:    string;
    properties: AudioDetailsAlbumProperties;
}

export interface AudioDetailsAlbumProperties {
    albumid:                   AlbumidElement;
    description:               AuthorClass;
    theme:                     AdditionalProperties;
    mood:                      AdditionalProperties;
    style:                     AdditionalProperties;
    type:                      AuthorClass;
    albumlabel:                AuthorClass;
    playcount:                 AuthorClass;
    compilation:               AuthorClass;
    releasetype:               AdditionalProperties;
    musicbrainzreleasegroupid: AuthorClass;
    musicbrainzalbumid:        AuthorClass;
    songgenres:                AdditionalProperties;
    lastplayed:                AuthorClass;
    sourceid:                  AdditionalProperties;
    isboxset:                  AuthorClass;
    totaldiscs:                AuthorClass;
    albumstatus:               AuthorClass;
    albumduration:             AuthorClass;
}

export interface AudioDetailsArtist {
    extends:    string;
    properties: AudioDetailsArtistProperties;
}

export interface AudioDetailsArtistProperties {
    artistid:            AlbumidElement;
    artist:              ReturnsValue;
    instrument:          AdditionalProperties;
    style:               AdditionalProperties;
    mood:                AdditionalProperties;
    born:                AuthorClass;
    formed:              AuthorClass;
    description:         AuthorClass;
    died:                AuthorClass;
    disbanded:           AuthorClass;
    yearsactive:         AdditionalProperties;
    compilationartist:   AuthorClass;
    musicbrainzartistid: AdditionalProperties;
    roles:               AdditionalProperties;
    songgenres:          AdditionalProperties;
    isalbumartist:       AuthorClass;
    sortname:            AuthorClass;
    type:                AuthorClass;
    gender:              AuthorClass;
    disambiguation:      AuthorClass;
    sourceid:            AdditionalProperties;
}

export interface AudioDetailsBase {
    extends:    string;
    properties: AudioDetailsBaseProperties;
}

export interface AudioDetailsBaseProperties {
    genre:     AdditionalProperties;
    dateadded: AuthorClass;
    art:       AdditionalProperties;
}

export interface AudioDetailsGenres {
    type:  ReturnsElement;
    items: AudioDetailsGenresItems;
}

export interface AudioDetailsGenresItems {
    type:       ReturnsElement;
    properties: CunningProperties;
}

export interface CunningProperties {
    genreid: AlbumidElement;
    title:   AuthorClass;
}

export interface AudioDetailsMedia {
    extends:    string;
    properties: AudioDetailsMediaProperties;
}

export interface AudioDetailsMediaProperties {
    title:                    AuthorClass;
    artist:                   AdditionalProperties;
    year:                     AuthorClass;
    rating:                   AuthorClass;
    musicbrainzalbumartistid: AdditionalProperties;
    artistid:                 AdditionalProperties;
    displayartist:            AuthorClass;
    votes:                    AuthorClass;
    userrating:               AuthorClass;
    sortartist:               AuthorClass;
    releasedate:              AuthorClass;
    originaldate:             AuthorClass;
}

export interface AudioDetailsRole {
    extends:    string;
    properties: AudioDetailsRoleProperties;
}

export interface AudioDetailsRoleProperties {
    roleid: AlbumidElement;
    title:  AuthorClass;
}

export interface AudioDetailsSong {
    extends:    string;
    properties: AudioDetailsSongProperties;
}

export interface AudioDetailsSongProperties {
    songid:              AlbumidElement;
    file:                AuthorClass;
    albumartist:         AdditionalProperties;
    album:               AuthorClass;
    track:               AuthorClass;
    duration:            AuthorClass;
    comment:             AuthorClass;
    lyrics:              AuthorClass;
    playcount:           AuthorClass;
    musicbrainztrackid:  AuthorClass;
    musicbrainzartistid: AdditionalProperties;
    albumid:             AdditionalProperties;
    lastplayed:          AuthorClass;
    disc:                AuthorClass;
    albumartistid:       AdditionalProperties;
    albumreleasetype:    AdditionalProperties;
    mood:                AuthorClass;
    contributors:        AdditionalProperties;
    displaycomposer:     AuthorClass;
    displayconductor:    AuthorClass;
    displayorchestra:    AuthorClass;
    displaylyricist:     AuthorClass;
    genreid:             AdditionalProperties;
    sourceid:            AdditionalProperties;
    disctitle:           AuthorClass;
    bpm:                 AuthorClass;
    samplerate:          AuthorClass;
    bitrate:             AuthorClass;
    channels:            AuthorClass;
    songvideourl:        AuthorClass;
}

export interface AudioFieldsAlbum {
    extends: Extends;
    items:   AudioFieldsAlbumItems;
}

export interface AudioFieldsAlbumItems {
    type:        ReturnsElement;
    description: string;
    enum:        string[];
}

export interface AudioPropertyValue {
    type:       ReturnsElement;
    properties: AudioPropertyValueProperties;
}

export interface AudioPropertyValueProperties {
    missingartistid:    AdditionalProperties;
    librarylastupdated: AuthorClass;
    librarylastcleaned: AuthorClass;
    artistlinksupdated: AuthorClass;
    songslastadded:     AuthorClass;
    albumslastadded:    AuthorClass;
    artistslastadded:   AuthorClass;
    genreslastadded:    AuthorClass;
    songsmodified:      AuthorClass;
    albumsmodified:     AuthorClass;
    artistsmodified:    AuthorClass;
}

export interface AudioLibraryClean {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      GetreferencesElement[];
    returns:     ReturnsElement;
}

export interface GetreferencesProperties {
    id:            Language;
    type:          Language;
    getreferences: GetreferencesElement;
}

export interface GetreferencesElement {
    name?:        string;
    type?:        ReturnsElement;
    default?:     boolean;
    description?: string;
    required?:    boolean;
    properties?:  GetreferencesProperties;
    $ref?:        ParamRef;
}

export interface AudioLibraryExport {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryExportParam[];
    returns:     ReturnsElement;
}

export interface AudioLibraryExportParam {
    name: string;
    type: FluffyType[];
}

export interface FluffyType {
    type:                 ReturnsElement;
    required:             boolean;
    additionalProperties: boolean;
    properties:           MagentaProperties;
}

export interface MagentaProperties {
    path?:        Path;
    overwrite?:   GetreferencesElement;
    images?:      GetreferencesElement;
    actorthumbs?: GetreferencesElement;
}

export interface Path {
    type:        ReturnsElement;
    required:    boolean;
    minLength:   number;
    description: string;
}

export interface AudioLibraryGetAlbumDetails {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AddonsGetAddonDetailsParam[];
    returns:     AudioLibraryGetAlbumDetailsReturns;
}

export interface AudioLibraryGetAlbumDetailsReturns {
    type:       ReturnsElement;
    properties: FriskyProperties;
}

export interface FriskyProperties {
    albumdetails: AdditionalProperties;
}

export interface AudioLibraryGetAlbums {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetAlbumsParam[];
    returns:     AudioLibraryGetAlbumsReturns;
}

export interface AudioLibraryGetAlbumsParam {
    name:         string;
    $ref?:        string;
    type?:        TentacledType[] | ReturnsElement;
    default?:     boolean;
    description?: string;
}

export interface TentacledType {
    type?:                 ReturnsElement;
    properties?:           MischievousProperties;
    additionalProperties?: boolean;
    $ref?:                 string;
}

export interface MischievousProperties {
    genreid?:  SkinElement;
    genre?:    Language;
    artistid?: AlbumidElement;
    roleid?:   AlbumidElement;
    role?:     Language;
    artist?:   Language;
    albumid?:  AlbumidElement;
    album?:    Language;
}

export interface SkinElement {
    $ref?:        string;
    required?:    boolean;
    description?: string;
    name?:        string;
    type?:        StickyType[] | ReturnsElement;
    minLength?:   number;
    properties?:  RoleidProperties;
}

export interface RoleidProperties {
    file:      FileElement;
    root:      FileElement;
    failcount: LibraryID;
}

export interface StickyType {
    type?:                 ReturnsElement;
    enum?:                 string[];
    required:              boolean;
    $ref?:                 ParamRef;
    description?:          string;
    properties?:           BraggadociousProperties;
    additionalProperties?: boolean;
}

export interface BraggadociousProperties {
    percentage?: RecordingidElement;
    time?:       RecordingidElement;
    step?:       LibraryID;
    seconds?:    LibraryID;
}

export interface RecordingidElement {
    name?:        string;
    $ref?:        string;
    description?: string;
    required?:    boolean;
    type?:        RecordingidElement[] | ReturnsElement;
    items?:       AdditionalProperties;
    properties?:  RecordingidProperties;
    minLength?:   number;
}

export interface RecordingidProperties {
    playlistid: AlbumidElement;
    item:       AdditionalProperties;
    position:   AdditionalProperties;
}

export interface AudioLibraryGetAlbumsReturns {
    type:       ReturnsElement;
    properties: Properties1;
}

export interface Properties1 {
    limits: AlbumidElement;
    albums: SettingValueList;
}

export interface AudioLibraryGetArtistDetails {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AddonsGetAddonDetailsParam[];
    returns:     AudioLibraryGetArtistDetailsReturns;
}

export interface AudioLibraryGetArtistDetailsReturns {
    type:       ReturnsElement;
    properties: Properties2;
}

export interface Properties2 {
    artistdetails: AdditionalProperties;
}

export interface AudioLibraryGetArtists {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetArtistsParam[];
    returns:     AudioLibraryGetArtistsReturns;
}

export interface AudioLibraryGetArtistsParam {
    name:         string;
    $ref?:        string;
    description?: string;
    type?:        IndigoType[] | ReturnsElement;
    default?:     boolean;
}

export interface IndigoType {
    type?:                 ReturnsElement;
    properties?:           Properties3;
    additionalProperties?: boolean;
    $ref?:                 string;
}

export interface Properties3 {
    genreid?:     SkinElement;
    songgenreid?: SkinElement;
    roleid?:      SkinElement;
    role?:        Language;
    genre?:       Language;
    songgenre?:   Language;
    albumid?:     AlbumidElement;
    album?:       Language;
    songid?:      AlbumidElement;
}

export interface AudioLibraryGetArtistsReturns {
    type:       ReturnsElement;
    properties: Properties4;
}

export interface Properties4 {
    limits:  AlbumidElement;
    artists: SettingValueList;
}

export interface AudioLibraryGetAvailableArt {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetAvailableArtParam[];
    returns:     AudioLibraryGetAvailableArtReturns;
}

export interface AudioLibraryGetAvailableArtParam {
    name:      string;
    required?: boolean;
    type:      IndecentType[] | ReturnsElement;
}

export interface IndecentType {
    type:                 ReturnsElement;
    properties:           Properties5;
    additionalProperties: boolean;
}

export interface Properties5 {
    albumid?:  AlbumidElement;
    artistid?: AlbumidElement;
}

export interface AudioLibraryGetAvailableArtReturns {
    type:       ReturnsElement;
    properties: Properties6;
}

export interface Properties6 {
    availableart: Availableart;
}

export interface Availableart {
    type:     ReturnsElement;
    required: boolean;
    items:    AvailableartItems;
}

export interface AvailableartItems {
    type:       ReturnsElement;
    properties: Properties7;
}

export interface Properties7 {
    url:        Language;
    arttype:    ReturnsValue;
    previewurl: DynpathClass;
}

export interface AudioLibraryGetAvailableArtTypes {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetAvailableArtTypesParam[];
    returns:     AudioLibraryGetAvailableArtTypesReturns;
}

export interface AudioLibraryGetAvailableArtTypesParam {
    name:     string;
    required: boolean;
    type:     IndecentType[];
}

export interface AudioLibraryGetAvailableArtTypesReturns {
    type:       ReturnsElement;
    properties: Properties8;
}

export interface Properties8 {
    availablearttypes: Availablearttypes;
}

export interface Availablearttypes {
    type:     ReturnsElement;
    required: boolean;
    items?:   AuthorClass;
}

export interface AudioLibraryGetGenres {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetGenresParam[];
    returns:     AudioLibraryGetGenresReturns;
}

export interface AudioLibraryGetGenresParam {
    name: PurpleName;
    $ref: string;
}

export enum PurpleName {
    Filter = "filter",
    Limits = "limits",
    Properties = "properties",
    Season = "season",
    Sort = "sort",
    Tvshowid = "tvshowid",
}

export interface AudioLibraryGetGenresReturns {
    type:       ReturnsElement;
    properties: Properties9;
}

export interface Properties9 {
    limits: AlbumidElement;
    genres: Genres;
}

export interface Genres {
    type:     ReturnsElement;
    required: boolean;
    items:    AdditionalProperties;
}

export interface AudioLibraryGetRecentlyEdAlbums {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetGenresParam[];
    returns:     AudioLibraryGetAlbumsReturns;
}

export interface AudioLibraryGetRecentlyAddedSongs {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      RecordingidElement[];
    returns:     AudioLibraryGetRecentlyAddedSongsReturns;
}

export interface AudioLibraryGetRecentlyAddedSongsReturns {
    type:       ReturnsElement;
    properties: Properties10;
}

export interface Properties10 {
    limits: AlbumidElement;
    songs:  SettingValueList;
}

export interface AudioLibraryGetRecentlyPlayedSongs {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetGenresParam[];
    returns:     AudioLibraryGetRecentlyAddedSongsReturns;
}

export interface AudioLibraryGetRoles {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetGenresParam[];
    returns:     AudioLibraryGetRolesReturns;
}

export interface AudioLibraryGetRolesReturns {
    type:       ReturnsElement;
    properties: Properties11;
}

export interface Properties11 {
    limits: AlbumidElement;
    roles:  Groups;
}

export interface Groups {
    type:         ReturnsElement;
    required?:    boolean;
    items:        AdditionalProperties;
    minItems?:    number;
    uniqueItems?: boolean;
}

export interface AudioLibraryGetSongDetails {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AddonsGetAddonDetailsParam[];
    returns:     AudioLibraryGetSongDetailsReturns;
}

export interface AudioLibraryGetSongDetailsReturns {
    type:       ReturnsElement;
    properties: Properties12;
}

export interface Properties12 {
    songdetails: AdditionalProperties;
}

export interface AudioLibraryGetSongs {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetAlbumsParam[];
    returns:     AudioLibraryGetRecentlyAddedSongsReturns;
}

export interface AudioLibraryGetSources {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetGenresParam[];
    returns:     AudioLibraryGetSourcesReturns;
}

export interface AudioLibraryGetSourcesReturns {
    type:       ReturnsElement;
    properties: Properties13;
}

export interface Properties13 {
    limits:  AlbumidElement;
    sources: Groups;
}

export interface AudioLibraryOnCleanFinished {
    type:        ApplicationOnVolumeChangedType;
    description: string;
    params:      AudioLibraryOnCleanFinishedParam[];
    returns:     null;
}

export interface AudioLibraryOnCleanFinishedParam {
    name:     FluffyName;
    type:     ReturnsElement;
    required: boolean;
}

export enum FluffyName {
    Data = "data",
    Sender = "sender",
}

export interface OLibraryOnRemove {
    type:        ApplicationOnVolumeChangedType;
    description: string;
    params:      AudioLibraryOnRemoveParam[];
    returns:     null;
}

export interface AudioLibraryOnRemoveParam {
    name:        FluffyName;
    type:        ReturnsElement;
    required:    boolean;
    properties?: Properties14;
}

export interface Properties14 {
    id:          AlbumidElement;
    type:        AlbumidElement;
    transaction: Sorttokens;
}

export interface AudioLibraryScan {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryScanParam[];
    returns:     ReturnsElement;
}

export interface AudioLibraryScanParam {
    name:         string;
    type:         ReturnsElement;
    default:      boolean | string;
    description?: string;
    enum?:        string[];
}

export interface Details {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibrarySetAlbumDetailsParam[];
    returns:     ReturnsElement;
}

export interface AudioLibrarySetAlbumDetailsParam {
    name:         string;
    $ref?:        ParamRef;
    required?:    boolean;
    type?:        Array<HilariousType | ReturnsElement>;
    default?:     null | string;
    description?: string;
}

export interface HilariousType {
    $ref?:                 PurpleRef;
    required?:             boolean;
    type?:                 ReturnsElement;
    description?:          string;
    enum?:                 string[];
    minimum?:              number;
    properties?:           Properties15;
    additionalProperties?: boolean;
}

export enum PurpleRef {
    ArrayString = "Array.String",
    GlobalIncrementDecrement = "Global.IncrementDecrement",
    MediaArtworkSet = "Media.Artwork.Set",
    MediaUniqueIDSet = "Media.UniqueID.Set",
    VideoResume = "Video.Resume",
}

export interface Properties15 {
    section:  Language;
    category: Language;
}

export interface Configuration {
    type:       ReturnsElement;
    required:   boolean;
    properties: ConfigurationProperties;
}

export interface ConfigurationProperties {
    notifications: AlbumidElement;
}

export interface ConfigurationNotifications {
    type:                 ReturnsElement;
    properties:           ConfigurationNotificationsProperties;
    additionalProperties: boolean;
}

export interface ConfigurationNotificationsProperties {
    Player:       ReturnsValue;
    Playlist:     ReturnsValue;
    GUI:          ReturnsValue;
    System:       ReturnsValue;
    VideoLibrary: ReturnsValue;
    AudioLibrary: ReturnsValue;
    Application:  ReturnsValue;
    Input:        ReturnsValue;
    PVR:          ReturnsValue;
    Other:        ReturnsValue;
}

export interface FavouriteDetailsFavourite {
    type:                 ReturnsElement;
    properties:           FavouriteDetailsFavouriteProperties;
    additionalProperties: boolean;
}

export interface FavouriteDetailsFavouriteProperties {
    title:           ReturnsValue;
    type:            AlbumidElement;
    path:            AuthorClass;
    window:          AuthorClass;
    windowparameter: AuthorClass;
    thumbnail:       AuthorClass;
}

export interface FavouritesAddFavourite {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      FavouritesAddFavouriteParam[];
    returns:     ReturnsElement;
}

export interface FavouritesAddFavouriteParam {
    name:         string;
    type?:        ReturnsElement;
    required?:    boolean;
    $ref?:        string;
    description?: string;
}

export interface FavouritesGetFavourites {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      FavouritesGetFavouritesParam[];
    returns:     FavouritesGetFavouritesReturns;
}

export interface FavouritesGetFavouritesParam {
    name:     string;
    type?:    Array<AdditionalProperties | ReturnsElement>;
    default?: null;
    $ref?:    string;
}

export interface FavouritesGetFavouritesReturns {
    type:       ReturnsElement;
    properties: Properties16;
}

export interface Properties16 {
    limits:     AlbumidElement;
    favourites: SettingValueList;
}

export interface FilesDownload {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   string[];
    permission:  string;
    params:      AddonsGetAddonDetailsParam[];
    returns:     ReturnsValue;
}

export interface FilesGetDirectory {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AddonsGetAddonDetailsParam[];
    returns:     FilesGetDirectoryReturns;
}

export interface FilesGetDirectoryReturns {
    type:       ReturnsElement;
    properties: Properties17;
}

export interface Properties17 {
    limits: AlbumidElement;
    files:  Groups;
}

export interface FilesGetFileDetails {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AddonsGetAddonDetailsParam[];
    returns:     FilesGetFileDetailsReturns;
}

export interface FilesGetFileDetailsReturns {
    type:       ReturnsElement;
    properties: Properties18;
}

export interface Properties18 {
    filedetails: AlbumidElement;
}

export interface FilesGetSources {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AddonsGetAddonDetailsParam[];
    returns:     FilesGetSourcesReturns;
}

export interface FilesGetSourcesReturns {
    type:       ReturnsElement;
    properties: Properties19;
}

export interface Properties19 {
    limits:  AlbumidElement;
    sources: AlbumidElement;
}

export interface FilesPrepareDownload {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   string[];
    permission:  string;
    params:      AddonsGetAddonDetailsParam[];
    returns:     FilesPrepareDownloadReturns;
}

export interface FilesPrepareDownloadReturns {
    type:       ReturnsElement;
    properties: Properties20;
}

export interface Properties20 {
    protocol: Language;
    details:  Language;
    mode:     Language;
}

export interface FilesSetFileDetails {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      FilesSetFileDetailsParam[];
    returns:     ReturnsElement;
}

export interface FilesSetFileDetailsParam {
    name:         string;
    type?:        Array<AlbumidElement | ReturnsElement> | ReturnsElement;
    required?:    boolean;
    description?: string;
    $ref?:        string;
    default?:     null;
}

export interface GUIActivateWindow {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      GUIActivateWindowParam[];
    returns:     ReturnsElement;
}

export interface GUIActivateWindowParam {
    name:      string;
    $ref?:     string;
    required?: boolean;
    type?:     ReturnsElement;
    items?:    Language;
    minItems?: number;
}

export interface GUIGetStereoscopicModes {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      any[];
    returns:     GUIGetStereoscopicModesReturns;
}

export interface GUIGetStereoscopicModesReturns {
    type:       ReturnsElement;
    properties: Properties21;
}

export interface Properties21 {
    stereoscopicmodes: Weekdays;
}

export interface Weekdays {
    type:        ReturnsElement;
    uniqueItems: boolean;
    items:       AdditionalProperties;
    minItems?:   number;
}

export interface GUIPropertyValue {
    type:       ReturnsElement;
    properties: GUIPropertyValueProperties;
}

export interface GUIPropertyValueProperties {
    currentwindow:    Currentwindow;
    currentcontrol:   ItemDetailsBase;
    skin:             Skin;
    fullscreen:       AuthorClass;
    stereoscopicmode: AdditionalProperties;
}

export interface ItemDetailsBase {
    type:       ReturnsElement;
    properties: ItemDetailsBaseProperties;
}

export interface ItemDetailsBaseProperties {
    label: ReturnsValue;
}

export interface Currentwindow {
    type:       ReturnsElement;
    properties: CurrentwindowProperties;
}

export interface CurrentwindowProperties {
    id:    ReturnsValue;
    label: ReturnsValue;
}

export interface Skin {
    type:       ReturnsElement;
    properties: Properties22;
}

export interface Properties22 {
    id:   Language;
    name: AuthorClass;
}

export interface GUIShowNotification {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      GUIShowNotificationParam[];
    returns:     ReturnsElement;
}

export interface GUIShowNotificationParam {
    name:         string;
    type:         Filetype[] | ReturnsElement;
    required?:    boolean;
    default?:     number | string;
    minimum?:     number;
    description?: string;
}

export interface GUIStereoscopyMode {
    type:       ReturnsElement;
    properties: GUIStereoscopyModeProperties;
}

export interface GUIStereoscopyModeProperties {
    mode:  Language;
    label: ReturnsValue;
}

export interface Time {
    type:                 ReturnsElement;
    description:          string;
    properties:           GlobalTimeProperties;
    additionalProperties: boolean;
}

export interface GlobalTimeProperties {
    hours:        LibraryID;
    minutes:      LibraryID;
    seconds:      LibraryID;
    milliseconds: LibraryID;
}

export interface GlobalToggle {
    type: Language[];
}

export interface InputButtonEvent {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  Permission;
    params:      InputButtonEventParam[];
    returns:     ReturnsElement;
}

export interface InputButtonEventParam {
    name:        string;
    type:        ReturnsElement;
    required:    boolean;
    description: string;
    enum?:       string[];
    minimum?:    number;
    default?:    number;
}

export interface InputExecuteAction {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  Permission;
    params:      InputExecuteActionParam[];
    returns:     ReturnsElement;
}

export interface InputExecuteActionParam {
    name:     string;
    $ref:     ParamRef;
    required: boolean;
}

export interface ItemCustomProperties {
    type:                 ReturnsElement;
    additionalProperties: AdditionalProperties;
}

export interface ItemFieldsBase {
    type:        ReturnsElement;
    uniqueItems: boolean;
    items:       AuthorClass;
}

export interface JsonrpcGetConfiguration {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   string;
    permission:  string;
    params:      JSONRPCGetConfigurationParam[];
    returns:     AdditionalProperties;
}

export interface JSONRPCGetConfigurationParam {
    name:        string;
    type?:       AmbitiousType[] | ReturnsElement;
    properties?: Properties23;
    $ref?:       ParamRef;
    required?:   boolean;
    default?:    string;
}

export interface Properties23 {
    Player:       AdditionalProperties;
    Playlist:     AdditionalProperties;
    GUI:          AdditionalProperties;
    System:       AdditionalProperties;
    AudioLibrary: AdditionalProperties;
    VideoLibrary: AdditionalProperties;
    Application:  AdditionalProperties;
    Input:        AdditionalProperties;
    Other:        AdditionalProperties;
}

export interface AmbitiousType {
    type?:    ReturnsElement;
    required: boolean;
    enum?:    number[];
    $ref?:    PurpleRef;
}

export interface JsonrpcNotifyAll {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      FileElement[];
    returns:     ReturnsElement;
}

export interface JSONRPCPermission {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      any[];
    returns:     JSONRPCPermissionReturns;
}

export interface JSONRPCPermissionReturns {
    type:       ReturnsElement;
    properties: { [key: string]: ReturnsValue };
}

export interface JSONRPCVersion {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      any[];
    returns:     JSONRPCVersionReturns;
}

export interface JSONRPCVersionReturns {
    type:       ReturnsElement;
    properties: Properties24;
}

export interface Properties24 {
    version: FluffyVersion;
}

export interface FluffyVersion {
    type:       ReturnsElement;
    required:   boolean;
    properties: Properties25;
}

export interface Properties25 {
    major: LibraryID;
    minor: LibraryID;
    patch: LibraryID;
}

export interface LibraryDetailsGenre {
    extends:    string;
    properties: LibraryDetailsGenreProperties;
}

export interface LibraryDetailsGenreProperties {
    genreid:   AlbumidElement;
    title:     AuthorClass;
    thumbnail: AuthorClass;
    sourceid:  Sorttokens;
}

export interface LibraryDetailsSource {
    extends:    string;
    properties: LibraryDetailsSourceProperties;
}

export interface LibraryDetailsSourceProperties {
    sourceid: AlbumidElement;
    file:     Language;
    paths:    Sorttokens;
}

export interface LibraryDetailsTag {
    extends:    string;
    properties: LibraryDetailsTagProperties;
}

export interface LibraryDetailsTagProperties {
    tagid: AlbumidElement;
    title: AuthorClass;
}

export interface ListFilter {
    type: ListFilterAlbumsType[];
}

export interface ListFilterAlbumsType {
    type?:       ReturnsElement;
    properties?: Properties26;
    $ref?:       string;
}

export interface Properties26 {
    and?: Groups;
    or?:  Groups;
}

export interface ListFilterRule {
    type:       ReturnsElement;
    properties: ListFilterRuleProperties;
}

export interface ListFilterRuleProperties {
    operator: AlbumidElement;
    value:    PurpleValue;
}

export interface PurpleValue {
    type:     Availablearttypes[];
    required: boolean;
}

export interface ListFilterRuleAlbumsClass {
    extends:    string;
    properties: ListFilterRuleAlbumsProperties;
}

export interface ListFilterRuleAlbumsProperties {
    field: AlbumidElement;
}

export interface ListItemAll {
    extends:    string;
    properties: ListItemAllProperties;
}

export interface ListItemAllProperties {
    channel:          AuthorClass;
    channeltype:      AdditionalProperties;
    hidden:           AuthorClass;
    locked:           AuthorClass;
    channelnumber:    AuthorClass;
    subchannelnumber: AuthorClass;
    starttime:        AuthorClass;
    endtime:          AuthorClass;
}

export interface ListItemBase {
    extends:    string[];
    properties: ListItemBaseProperties;
}

export interface ListItemBaseProperties {
    id:                  AdditionalProperties;
    type:                ApplicationPropertyName;
    albumartist:         AdditionalProperties;
    album:               AuthorClass;
    track:               AuthorClass;
    duration:            AuthorClass;
    comment:             AuthorClass;
    lyrics:              AuthorClass;
    musicbrainztrackid:  AuthorClass;
    musicbrainzartistid: AdditionalProperties;
    trailer:             AuthorClass;
    tagline:             AuthorClass;
    plotoutline:         AuthorClass;
    originaltitle:       AuthorClass;
    writer:              AdditionalProperties;
    studio:              AdditionalProperties;
    mpaa:                AuthorClass;
    cast:                AdditionalProperties;
    country:             AdditionalProperties;
    imdbnumber:          AuthorClass;
    premiered:           AuthorClass;
    productioncode:      AuthorClass;
    set:                 AuthorClass;
    showlink:            AdditionalProperties;
    top250:              AuthorClass;
    votes:               AuthorClass;
    firstaired:          AuthorClass;
    season:              AuthorClass;
    episode:             AuthorClass;
    showtitle:           AuthorClass;
    albumid:             AdditionalProperties;
    setid:               AdditionalProperties;
    tvshowid:            AdditionalProperties;
    watchedepisodes:     AuthorClass;
    disc:                AuthorClass;
    tag:                 AdditionalProperties;
    albumartistid:       AdditionalProperties;
    uniqueid:            AdditionalProperties;
    episodeguide:        AuthorClass;
    sorttitle:           AuthorClass;
    description:         AuthorClass;
    theme:               AdditionalProperties;
    mood:                AdditionalProperties;
    style:               AdditionalProperties;
    albumlabel:          AuthorClass;
    specialsortseason:   AuthorClass;
    specialsortepisode:  AuthorClass;
    compilation:         AuthorClass;
    releasetype:         AdditionalProperties;
    albumreleasetype:    AdditionalProperties;
    contributors:        AdditionalProperties;
    displaycomposer:     AuthorClass;
    displayconductor:    AuthorClass;
    displayorchestra:    AuthorClass;
    displaylyricist:     AuthorClass;
    mediapath:           DynpathClass;
    dynpath:             DynpathClass;
    isboxset:            AuthorClass;
    totaldiscs:          AuthorClass;
    disctitle:           AuthorClass;
    releasedate:         AuthorClass;
    originaldate:        AuthorClass;
    bpm:                 AuthorClass;
    bitrate:             AuthorClass;
    samplerate:          AuthorClass;
    channels:            AuthorClass;
    albumstatus:         AuthorClass;
    customproperties:    AdditionalProperties;
    songvideourl:        AuthorClass;
}

export interface ListItemFile {
    extends:    string;
    properties: ListItemFileProperties;
}

export interface ListItemFileProperties {
    file:         ReturnsValue;
    filetype:     Filetype;
    size:         DynpathClass;
    lastmodified: AuthorClass;
    mimetype:     AuthorClass;
}

export interface ListItemsSources {
    type:  ReturnsElement;
    items: ListItemsSourcesItems;
}

export interface ListItemsSourcesItems {
    extends:    string;
    properties: Properties27;
}

export interface Properties27 {
    file: ReturnsValue;
}

export interface ListLimits {
    type:                 ReturnsElement;
    properties:           ListLimitsProperties;
    additionalProperties: boolean;
}

export interface ListLimitsProperties {
    start: LibraryID;
    end:   Sorttokens;
}

export interface ListLimitsReturned {
    type:                 ReturnsElement;
    properties:           ListLimitsReturnedProperties;
    additionalProperties: boolean;
}

export interface ListLimitsReturnedProperties {
    start: LibraryID;
    end:   AdditionalProperties;
    total: LibraryID;
}

export interface ListSort {
    type:       ReturnsElement;
    properties: ListSortProperties;
}

export interface ListSortProperties {
    method:            AddonContent;
    order:             AddonContent;
    ignorearticle:     Ignorearticle;
    useartistsortname: Ignorearticle;
}

export interface Ignorearticle {
    type:    ReturnsElement;
    default: boolean;
}

export interface MediaArtwork {
    type:                 ReturnsElement;
    properties:           MediaArtworkProperties;
    additionalProperties: AdditionalProperties;
}

export interface MediaArtworkProperties {
    thumb:  AdditionalProperties;
    poster: AdditionalProperties;
    banner: AdditionalProperties;
    fanart: AdditionalProperties;
}

export interface MediaArtworkSet {
    type:                 ReturnsElement;
    properties:           MediaArtworkSetProperties;
    additionalProperties: MediaArtworkSetAdditionalProperties;
}

export interface MediaArtworkSetAdditionalProperties {
    type: Array<AlbumidElement | ReturnsElement>;
}

export interface MediaArtworkSetProperties {
    thumb:  Banner;
    poster: Banner;
    banner: Banner;
    fanart: Banner;
}

export interface Banner {
    type:    Array<AlbumidElement | ReturnsElement>;
    default: null | string;
}

export interface MediaDetailsBase {
    extends:    string;
    properties: MediaDetailsBaseProperties;
}

export interface MediaDetailsBaseProperties {
    fanart:    AuthorClass;
    thumbnail: AuthorClass;
}

export interface Set {
    type:                 ReturnsElement;
    additionalProperties: MediaArtworkSetAdditionalProperties;
}

export interface NotificationsItem {
    type: NotificationsItemType[];
}

export interface NotificationsItemType {
    type:        ReturnsElement;
    description: string;
    properties:  Properties28;
}

export interface Properties28 {
    type:         AlbumidElement;
    id?:          AlbumidElement;
    title?:       ReturnsValue;
    year?:        AuthorClass;
    episode?:     AuthorClass;
    season?:      AuthorClass;
    showtitle?:   AuthorClass;
    album?:       AuthorClass;
    artist?:      AuthorClass;
    track?:       AuthorClass;
    file?:        ReturnsValue;
    channeltype?: AlbumidElement;
}

export interface Optional {
    type:    ReturnsElement[];
    default: null;
}

export interface PVRChannelGroupID {
    type: Filetype[];
}

export interface PVRDeleteTimer {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      PVRDeleteTimerParam[];
    returns:     ReturnsElement;
}

export interface PVRDeleteTimerParam {
    name:        string;
    $ref:        ParamRef;
    required:    boolean;
    description: string;
}

export interface PVRDetailsBroadcast {
    extends:    string;
    properties: PVRDetailsBroadcastProperties;
}

export interface PVRDetailsBroadcastProperties {
    broadcastid:        AlbumidElement;
    title:              AuthorClass;
    plot:               AuthorClass;
    plotoutline:        AuthorClass;
    starttime:          AuthorClass;
    endtime:            AuthorClass;
    runtime:            AuthorClass;
    progress:           AuthorClass;
    progresspercentage: AuthorClass;
    genre:              AuthorClass;
    episodename:        AuthorClass;
    episodenum:         AuthorClass;
    episodepart:        AuthorClass;
    firstaired:         AuthorClass;
    hastimer:           AuthorClass;
    isactive:           AuthorClass;
    parentalrating:     AuthorClass;
    wasactive:          AuthorClass;
    thumbnail:          AuthorClass;
    rating:             AuthorClass;
    originaltitle:      AuthorClass;
    cast:               AuthorClass;
    director:           AuthorClass;
    writer:             AuthorClass;
    year:               AuthorClass;
    imdbnumber:         AuthorClass;
    hastimerrule:       AuthorClass;
    hasrecording:       AuthorClass;
    recording:          AuthorClass;
    isseries:           AuthorClass;
    isplayable:         DynpathClass;
    clientid:           AdditionalProperties;
    hasreminder:        AuthorClass;
    seasonnum:          AuthorClass;
}

export interface PVRDetailsChannel {
    extends:    string;
    properties: PVRDetailsChannelProperties;
}

export interface PVRDetailsChannelProperties {
    channelid:        AlbumidElement;
    channel:          AuthorClass;
    channeltype:      AdditionalProperties;
    hidden:           AuthorClass;
    locked:           AuthorClass;
    thumbnail:        AuthorClass;
    lastplayed:       AuthorClass;
    broadcastnow:     AdditionalProperties;
    broadcastnext:    AdditionalProperties;
    uniqueid:         ReturnsValue;
    icon:             AuthorClass;
    channelnumber:    AuthorClass;
    subchannelnumber: AuthorClass;
    isrecording:      AuthorClass;
    hasarchive:       AuthorClass;
    clientid:         AdditionalProperties;
}

export interface PVRDetailsChannelGroup {
    extends:    string;
    properties: PVRDetailsChannelGroupProperties;
}

export interface PVRDetailsChannelGroupProperties {
    channelgroupid: AlbumidElement;
    channeltype:    AlbumidElement;
}

export interface PVRDetailsChannelGroupExtended {
    extends:    string;
    properties: PVRDetailsChannelGroupExtendedProperties;
}

export interface PVRDetailsChannelGroupExtendedProperties {
    limits:   AlbumidElement;
    channels: SettingValueList;
}

export interface PVRDetailsClient {
    extends:    string;
    properties: PVRDetailsClientProperties;
}

export interface PVRDetailsClientProperties {
    clientid:              AlbumidElement;
    addonid:               AuthorClass;
    supportstv:            AuthorClass;
    supportsradio:         AuthorClass;
    supportsepg:           AuthorClass;
    supportsrecordings:    AuthorClass;
    supportstimers:        AuthorClass;
    supportschannelgroups: AuthorClass;
    supportschannelscan:   AuthorClass;
}

export interface PVRDetailsRecording {
    extends:    string;
    properties: PVRDetailsRecordingProperties;
}

export interface PVRDetailsRecordingProperties {
    recordingid: AlbumidElement;
    title:       AuthorClass;
    plot:        AuthorClass;
    plotoutline: AuthorClass;
    genre:       AuthorClass;
    playcount:   AuthorClass;
    resume:      AdditionalProperties;
    channel:     AuthorClass;
    starttime:   AuthorClass;
    endtime:     AuthorClass;
    runtime:     AuthorClass;
    lifetime:    AuthorClass;
    icon:        AuthorClass;
    art:         AdditionalProperties;
    streamurl:   AuthorClass;
    file:        AuthorClass;
    directory:   AuthorClass;
    radio:       AuthorClass;
    isdeleted:   AuthorClass;
    epgeventid:  AuthorClass;
    channeluid:  AuthorClass;
    season:      AuthorClass;
    episode:     AuthorClass;
    showtitle:   AuthorClass;
    clientid:    AdditionalProperties;
}

export interface PVRDetailsTimer {
    extends:    string;
    properties: PVRDetailsTimerProperties;
}

export interface PVRDetailsTimerProperties {
    timerid:                  AlbumidElement;
    title:                    AuthorClass;
    summary:                  AuthorClass;
    channelid:                AdditionalProperties;
    isradio:                  AuthorClass;
    istimerrule:              AuthorClass;
    ismanual:                 AuthorClass;
    starttime:                AuthorClass;
    endtime:                  AuthorClass;
    runtime:                  AuthorClass;
    lifetime:                 AuthorClass;
    firstday:                 AuthorClass;
    weekdays:                 Weekdays;
    priority:                 AuthorClass;
    startmargin:              AuthorClass;
    endmargin:                AuthorClass;
    state:                    AdditionalProperties;
    file:                     AuthorClass;
    directory:                AuthorClass;
    preventduplicateepisodes: AuthorClass;
    startanytime:             AuthorClass;
    endanytime:               AuthorClass;
    epgsearchstring:          AuthorClass;
    fulltextepgsearch:        AuthorClass;
    recordinggroup:           AuthorClass;
    maxrecordings:            AuthorClass;
    epguid:                   AuthorClass;
    isreadonly:               AuthorClass;
    isreminder:               AuthorClass;
    clientid:                 AdditionalProperties;
    broadcastid:              AdditionalProperties;
}

export interface PVRGetBroadcastDetails {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AddonsGetAddonDetailsParam[];
    returns:     PVRGetBroadcastDetailsReturns;
}

export interface PVRGetBroadcastDetailsReturns {
    type:       ReturnsElement;
    properties: Properties29;
}

export interface Properties29 {
    broadcastdetails: AdditionalProperties;
}

export interface PVRGetBroadcasts {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      SkinElement[];
    returns:     PVRGetBroadcastsReturns;
}

export interface PVRGetBroadcastsReturns {
    type:       ReturnsElement;
    properties: Properties30;
}

export interface Properties30 {
    limits:     AlbumidElement;
    broadcasts: Groups;
}

export interface PVRGetChannelDetails {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AddonsGetAddonDetailsParam[];
    returns:     PVRGetChannelDetailsReturns;
}

export interface PVRGetChannelDetailsReturns {
    type:       ReturnsElement;
    properties: Properties31;
}

export interface Properties31 {
    channeldetails: AdditionalProperties;
}

export interface PVRGetChannelGroupDetails {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AddonsGetAddonDetailsParam[];
    returns:     PVRGetChannelGroupDetailsReturns;
}

export interface PVRGetChannelGroupDetailsReturns {
    type:       ReturnsElement;
    properties: Properties32;
}

export interface Properties32 {
    channelgroupdetails: AdditionalProperties;
}

export interface PVRGetChannelGroups {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      RecordingidElement[];
    returns:     PVRGetChannelGroupsReturns;
}

export interface PVRGetChannelGroupsReturns {
    type:       ReturnsElement;
    properties: Properties33;
}

export interface Properties33 {
    limits:        AlbumidElement;
    channelgroups: Groups;
}

export interface PVRGetChannels {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      SkinElement[];
    returns:     PVRGetChannelsReturns;
}

export interface PVRGetChannelsReturns {
    type:       ReturnsElement;
    properties: Properties34;
}

export interface Properties34 {
    limits:   AlbumidElement;
    channels: Groups;
}

export interface PVRGetClients {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetGenresParam[];
    returns:     PVRGetClientsReturns;
}

export interface PVRGetClientsReturns {
    type:       ReturnsElement;
    properties: Properties35;
}

export interface Properties35 {
    limits:  AlbumidElement;
    clients: Groups;
}

export interface PVRGetRecordingDetails {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AddonsGetAddonDetailsParam[];
    returns:     PVRGetRecordingDetailsReturns;
}

export interface PVRGetRecordingDetailsReturns {
    type:       ReturnsElement;
    properties: Properties36;
}

export interface Properties36 {
    recordingdetails: AdditionalProperties;
}

export interface PVRGetRecordings {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetGenresParam[];
    returns:     PVRGetRecordingsReturns;
}

export interface PVRGetRecordingsReturns {
    type:       ReturnsElement;
    properties: Properties37;
}

export interface Properties37 {
    limits:     AlbumidElement;
    recordings: Groups;
}

export interface PVRGetTimerDetails {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      RecordingidElement[];
    returns:     PVRGetTimerDetailsReturns;
}

export interface PVRGetTimerDetailsReturns {
    type:       ReturnsElement;
    properties: Properties38;
}

export interface Properties38 {
    timerdetails: AdditionalProperties;
}

export interface PVRGetTimers {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetGenresParam[];
    returns:     PVRGetTimersReturns;
}

export interface PVRGetTimersReturns {
    type:       ReturnsElement;
    properties: Properties39;
}

export interface Properties39 {
    limits: AlbumidElement;
    timers: Groups;
}

export interface PVRPropertyValue {
    type:       ReturnsElement;
    properties: PVRPropertyValueProperties;
}

export interface PVRPropertyValueProperties {
    available: AuthorClass;
    recording: AuthorClass;
    scanning:  AuthorClass;
}

export interface PVRRecord {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      PVRRecordParam[];
    returns:     ReturnsElement;
}

export interface PVRRecordParam {
    name?:        string;
    $ref?:        string;
    default?:     string;
    type?:        CunningType[];
    required?:    boolean;
    description?: string;
}

export interface CunningType {
    type?:        ReturnsElement;
    enum?:        Array<number | string>;
    required?:    boolean;
    $ref?:        string;
    minimum?:     number;
    description?: string;
}

export interface PVRScan {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      SkinElement[];
    returns:     ReturnsElement;
}

export interface PlayerAudioStream {
    type:       ReturnsElement;
    properties: PlayerAudioStreamProperties;
}

export interface PlayerAudioStreamProperties {
    index:      LibraryID;
    name:       ReturnsValue;
    language:   ReturnsValue;
    codec:      ReturnsValue;
    bitrate:    ReturnsValue;
    channels:   ReturnsValue;
    isdefault:  ReturnsValue;
    isoriginal: ReturnsValue;
    isimpaired: ReturnsValue;
    samplerate: ReturnsValue;
}

export interface PlayerCustomViewMode {
    type:       ReturnsElement;
    required:   boolean;
    properties: PlayerCustomViewModeProperties;
}

export interface PlayerCustomViewModeProperties {
    zoom:             Pixelratio;
    pixelratio:       Pixelratio;
    verticalshift:    Pixelratio;
    nonlinearstretch: PVRChannelGroupID;
}

export interface Pixelratio {
    type: PixelratioType[];
}

export interface PixelratioType {
    type?:        ReturnsElement;
    enum?:        string[];
    required:     boolean;
    $ref?:        ParamRef;
    minimum?:     number;
    maximum?:     number;
    description?: string;
}

export interface PlayerGetActivePlayers {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      any[];
    returns:     PlayerGetActivePlayersReturns;
}

export interface PlayerGetActivePlayersReturns {
    type:        ReturnsElement;
    uniqueItems: boolean;
    items:       PurpleItems;
}

export interface PurpleItems {
    type:       ReturnsElement;
    properties: Properties40;
}

export interface Properties40 {
    playerid:   AlbumidElement;
    type:       AlbumidElement;
    playertype: Language;
}

export interface PlayerEtAudioDelay {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibrarySetAlbumDetailsParam[];
    returns:     PlayerGetAudioDelayReturns;
}

export interface PlayerGetAudioDelayReturns {
    type:       ReturnsElement;
    properties: Properties41;
}

export interface Properties41 {
    offset: LibraryID;
}

export interface PlayerGetItem {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      RecordingidElement[];
    returns:     PlayerGetItemReturns;
}

export interface PlayerGetItemReturns {
    type:       ReturnsElement;
    properties: Properties42;
}

export interface Properties42 {
    item: AlbumidElement;
}

export interface PlayerGetPlayers {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AddonContent[];
    returns:     PlayerGetPlayersReturns;
}

export interface PlayerGetPlayersReturns {
    type:        ReturnsElement;
    uniqueItems: boolean;
    items:       FluffyItems;
}

export interface FluffyItems {
    type:       ReturnsElement;
    properties: Properties43;
}

export interface Properties43 {
    name:       AlbumidElement;
    type:       Language;
    playsvideo: ReturnsValue;
    playsaudio: ReturnsValue;
}

export interface PlayerGetViewMode {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      any[];
    returns:     PlayerGetViewModeReturns;
}

export interface PlayerGetViewModeReturns {
    type:       ReturnsElement;
    properties: Properties44;
}

export interface Properties44 {
    viewmode:         AlbumidElement;
    zoom:             ReturnsValue;
    pixelratio:       ReturnsValue;
    verticalshift:    ReturnsValue;
    nonlinearstretch: ReturnsValue;
}

export interface PlayerMove {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  Permission;
    params:      Filetype[];
    returns:     ReturnsElement;
}

export interface PlayerNotificationsData {
    type:       ReturnsElement;
    properties: PlayerNotificationsDataProperties;
}

export interface PlayerNotificationsDataProperties {
    item:   AlbumidElement;
    player: AlbumidElement;
}

export interface PlayerNotificationsPlayer {
    type:       ReturnsElement;
    properties: PlayerNotificationsPlayerProperties;
}

export interface PlayerNotificationsPlayerProperties {
    playerid: AlbumidElement;
    speed:    AuthorClass;
}

export interface PlayerNotificationsPlayerSeek {
    extends:    string;
    properties: PlayerNotificationsPlayerSeekProperties;
}

export interface PlayerNotificationsPlayerSeekProperties {
    time:       AdditionalProperties;
    seekoffset: AdditionalProperties;
}

export interface PlayerOn {
    type:        ApplicationOnVolumeChangedType;
    description: string;
    params:      PlayerOnAVChangeParam[];
    returns:     null;
}

export interface PlayerOnAVChangeParam {
    name:     FluffyName;
    type?:    ReturnsElement;
    required: boolean;
    $ref?:    string;
}

export interface Play {
    type:        ApplicationOnVolumeChangedType;
    description: string;
    params:      FileElement[];
    returns:     null;
}

export interface PlayerOpen {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  Permission;
    params:      PlayerOpenParam[];
    returns:     ReturnsElement;
}

export interface PlayerOpenParam {
    name:                  string;
    type:                  MagentaType[] | ReturnsElement;
    additionalProperties?: boolean;
    properties?:           Properties45;
}

export interface Properties45 {
    playername: Playername;
    shuffled:   AdditionalProperties;
    repeat:     Banner;
    resume:     Resume;
}

export interface Playername {
    type:    Array<Filetype | ReturnsElement>;
    default: null;
}

export interface Resume {
    type:    Filetype[];
    default: boolean;
}

export interface MagentaType {
    type?:                 ReturnsElement;
    required:              boolean;
    additionalProperties?: boolean;
    properties?:           Properties46;
    $ref?:                 string;
}

export interface Properties46 {
    playlistid?:  AlbumidElement;
    position?:    Position;
    path?:        ReturnsValue;
    random?:      GetreferencesElement;
    recursive?:   Ignorearticle;
    partymode?:   GlobalToggle;
    broadcastid?: AlbumidElement;
    channelid?:   AlbumidElement;
    recordingid?: AlbumidElement;
}

export interface Position {
    $ref:    ParamRef;
    default: number;
}

export interface PlayerPropertyValue {
    type:       ReturnsElement;
    properties: PlayerPropertyValueProperties;
}

export interface PlayerPropertyValueProperties {
    type:               AdditionalProperties;
    partymode:          AuthorClass;
    speed:              AuthorClass;
    time:               AdditionalProperties;
    percentage:         AdditionalProperties;
    totaltime:          AdditionalProperties;
    playlistid:         AdditionalProperties;
    position:           AdditionalProperties;
    repeat:             AdditionalProperties;
    shuffled:           AuthorClass;
    canseek:            AuthorClass;
    canchangespeed:     AuthorClass;
    canmove:            AuthorClass;
    canzoom:            AuthorClass;
    canrotate:          AuthorClass;
    canshuffle:         AuthorClass;
    canrepeat:          AuthorClass;
    currentaudiostream: AdditionalProperties;
    audiostreams:       SettingValueList;
    currentvideostream: AdditionalProperties;
    videostreams:       SettingValueList;
    subtitleenabled:    AuthorClass;
    currentsubtitle:    AdditionalProperties;
    subtitles:          SettingValueList;
    live:               AuthorClass;
    cachepercentage:    AdditionalProperties;
}

export interface PlayerSeek {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  Permission;
    params:      SkinElement[];
    returns:     PlayerSeekReturns;
}

export interface PlayerSeekReturns {
    type:       ReturnsElement;
    properties: Properties47;
}

export interface Properties47 {
    percentage: AdditionalProperties;
    time:       AdditionalProperties;
    totaltime:  AdditionalProperties;
}

export interface PlayerSetOStream {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  Permission;
    params:      PlayerSetAudioStreamParam[];
    returns:     ReturnsElement;
}

export interface PlayerSetAudioStreamParam {
    name:     string;
    $ref?:    ParamRef;
    required: boolean;
    type?:    FriskyType[];
}

export interface FriskyType {
    type:         ReturnsElement;
    description?: string;
    enum?:        string[];
    minimum?:     number;
}

export interface PlayerSetSubtitle {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  Permission;
    params:      PlayerSetSubtitleParam[];
    returns:     ReturnsElement;
}

export interface PlayerSetSubtitleParam {
    name:         string;
    $ref?:        ParamRef;
    required?:    boolean;
    type?:        Language[] | ReturnsElement;
    default?:     boolean;
    description?: string;
}

export interface PlayerSetViewMode {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  Permission;
    params:      PlayerSetViewModeParam[];
    returns:     ReturnsElement;
}

export interface PlayerSetViewModeParam {
    name:     string;
    type:     PVRRecordParam[];
    required: boolean;
}

export interface PlayerSpeed {
    type:       ReturnsElement;
    required:   boolean;
    properties: PlayerSpeedProperties;
}

export interface PlayerSpeedProperties {
    speed: AuthorClass;
}

export interface PlayerSubtitle {
    type:       ReturnsElement;
    properties: PlayerSubtitleProperties;
}

export interface PlayerSubtitleProperties {
    index:      LibraryID;
    name:       ReturnsValue;
    language:   ReturnsValue;
    isdefault:  ReturnsValue;
    isforced:   ReturnsValue;
    isimpaired: ReturnsValue;
}

export interface PlayerTempo {
    type:       ReturnsElement;
    required:   boolean;
    properties: PlayerTempoProperties;
}

export interface PlayerTempoProperties {
    tempo: AuthorClass;
}

export interface PlayerVideoStream {
    type:       ReturnsElement;
    properties: PlayerVideoStreamProperties;
}

export interface PlayerVideoStreamProperties {
    index:    LibraryID;
    name:     ReturnsValue;
    language: ReturnsValue;
    codec:    ReturnsValue;
    width:    ReturnsValue;
    height:   ReturnsValue;
}

export interface Playlist {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  Permission;
    params:      PlaylistAddParam[];
    returns:     ReturnsElement;
}

export interface PlaylistAddParam {
    name:     string;
    $ref?:    ParamRef;
    required: boolean;
    type?:    MischievousType[];
}

export interface MischievousType {
    $ref?:    string;
    required: boolean;
    type?:    ReturnsElement;
    items?:   AdditionalProperties;
}

export interface PlaylistGetItems {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      SkinElement[];
    returns:     PlaylistGetItemsReturns;
}

export interface PlaylistGetItemsReturns {
    type:       ReturnsElement;
    properties: Properties48;
}

export interface Properties48 {
    limits: AlbumidElement;
    items:  Groups;
}

export interface PlaylistGetPlaylists {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      any[];
    returns:     PlaylistGetPlaylistsReturns;
}

export interface PlaylistGetPlaylistsReturns {
    type:        ReturnsElement;
    uniqueItems: boolean;
    items:       TentacledItems;
}

export interface TentacledItems {
    type:       ReturnsElement;
    properties: Properties49;
}

export interface Properties49 {
    playlistid: AlbumidElement;
    type:       AlbumidElement;
}

export interface PlaylistItem {
    type: PlaylistItemType[];
}

export interface PlaylistItemType {
    type:                 ReturnsElement;
    properties:           Properties50;
    additionalProperties: boolean;
}

export interface Properties50 {
    file?:         LibraryID;
    directory?:    ReturnsValue;
    recursive?:    Ignorearticle;
    media?:        Media;
    movieid?:      AlbumidElement;
    episodeid?:    AlbumidElement;
    musicvideoid?: AlbumidElement;
    artistid?:     AlbumidElement;
    albumid?:      AlbumidElement;
    songid?:       AlbumidElement;
    genreid?:      LibraryID;
    recordingid?:  RecordingidElement;
}

export interface Media {
    $ref:    string;
    default: string;
}

export interface PlaylistOnAdd {
    type:        ApplicationOnVolumeChangedType;
    description: string;
    params:      RecordingidElement[];
    returns:     null;
}

export interface PlaylistPropertyValue {
    type:       ReturnsElement;
    properties: PlaylistPropertyValueProperties;
}

export interface PlaylistPropertyValueProperties {
    type: AdditionalProperties;
    size: Size;
}

export interface Size {
    type:    ReturnsElement;
    minimum: number;
}

export interface ProfilesDetailsProfile {
    extends:    string;
    properties: ProfilesDetailsProfileProperties;
}

export interface ProfilesDetailsProfileProperties {
    thumbnail: AuthorClass;
    lockmode:  AuthorClass;
}

export interface ProfilesGetCurrentProfile {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetGenresParam[];
    returns:     AlbumidElement;
}

export interface ProfilesGetProfiles {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetGenresParam[];
    returns:     ProfilesGetProfilesReturns;
}

export interface ProfilesGetProfilesReturns {
    type:       ReturnsElement;
    properties: Properties51;
}

export interface Properties51 {
    limits:   AlbumidElement;
    profiles: Groups;
}

export interface ProfilesPassword {
    type:       ReturnsElement;
    properties: ProfilesPasswordProperties;
}

export interface ProfilesPasswordProperties {
    value:      Language;
    encryption: AddonContent;
}

export interface SettingDetailsBase {
    type:       ReturnsElement;
    properties: SettingDetailsBaseProperties;
}

export interface SettingDetailsBaseProperties {
    id:    Language;
    label: ReturnsValue;
    help:  AuthorClass;
}

export interface SettingDetailsCategory {
    extends:              string;
    properties:           SettingDetailsCategoryProperties;
    additionalProperties: boolean;
}

export interface SettingDetailsCategoryProperties {
    groups: Groups;
}

export interface SettingDetails {
    type: AlbumidElement[];
}

export interface SettingDetailsControlBase {
    type:       ReturnsElement;
    properties: SettingDetailsControlBaseProperties;
}

export interface SettingDetailsControlBaseProperties {
    type:    ReturnsValue;
    format:  ReturnsValue;
    delayed: ReturnsValue;
}

export interface SettingDetailsControlButton {
    extends:    string;
    properties: SettingDetailsControlButtonProperties;
}

export interface SettingDetailsControlButtonProperties {
    type: Language;
}

export interface SettingDetailsControl {
    extends:    string;
    properties: SettingDetailsControlCheckmarkProperties;
}

export interface SettingDetailsControlCheckmarkProperties {
    type:   Format;
    format: Format;
}

export interface Format {
    type:     ReturnsElement;
    required: boolean;
    enum:     string[];
}

export interface SettingDetailsControlEdit {
    extends:    string;
    properties: SettingDetailsControlEditProperties;
}

export interface SettingDetailsControlEditProperties {
    type:           AddonsGetAddonDetailsParam;
    hidden:         ReturnsValue;
    verifynewvalue: ReturnsValue;
}

export interface SettingDetailsControlHeading {
    extends:    string;
    properties: SettingDetailsControlHeadingProperties;
}

export interface SettingDetailsControlHeadingProperties {
    heading: AuthorClass;
}

export interface SettingDetailsControlList {
    extends:    string;
    properties: SettingDetailsControlListProperties;
}

export interface SettingDetailsControlListProperties {
    type:        Filetype;
    multiselect: ReturnsValue;
}

export interface SettingDetailsControlRange {
    extends:    string;
    properties: SettingDetailsControlRangeProperties;
}

export interface SettingDetailsControlRangeProperties {
    type:        Language;
    formatlabel: ReturnsValue;
    formatvalue: ReturnsValue;
}

export interface SettingDetailsControlSlider {
    extends:    string;
    properties: SettingDetailsControlSliderProperties;
}

export interface SettingDetailsControlSliderProperties {
    type:        LibraryID;
    formatlabel: ReturnsValue;
    popup:       ReturnsValue;
}

export interface SettingDetailsControlSpinner {
    extends:    string;
    properties: SettingDetailsControlSpinnerProperties;
}

export interface SettingDetailsControlSpinnerProperties {
    type:         AddonsGetAddonDetailsParam;
    formatlabel:  AuthorClass;
    minimumlabel: AuthorClass;
}

export interface SettingDetailsGroup {
    type:                 ReturnsElement;
    properties:           SettingDetailsGroupProperties;
    additionalProperties: boolean;
}

export interface SettingDetailsGroupProperties {
    id:       Language;
    settings: Groups;
}

export interface SettingDetailsSection {
    extends:              string;
    properties:           SettingDetailsSectionProperties;
    additionalProperties: boolean;
}

export interface SettingDetailsSectionProperties {
    categories: Weekdays;
}

export interface SettingDetailsSettingAction {
    extends:              string;
    properties:           SettingDetailsSettingActionProperties;
    additionalProperties: boolean;
}

export interface SettingDetailsSettingActionProperties {
    data: ReturnsValue;
}

export interface SettingDetailsSettingAddon {
    extends:              string;
    properties:           SettingDetailsSettingAddonProperties;
    additionalProperties: boolean;
}

export interface SettingDetailsSettingAddonProperties {
    addontype: AlbumidElement;
}

export interface SettingDetailsSettingBase {
    extends:              string;
    properties:           SettingDetailsSettingBaseProperties;
    additionalProperties: boolean;
}

export interface SettingDetailsSettingBaseProperties {
    type:    AlbumidElement;
    enabled: ReturnsValue;
    level:   AlbumidElement;
    parent:  AuthorClass;
    control: AdditionalProperties;
}

export interface SettingDetailsSettingBool {
    extends:              string;
    properties:           SettingDetailsSettingBoolProperties;
    additionalProperties: boolean;
}

export interface SettingDetailsSettingBoolProperties {
    value:   ReturnsValue;
    default: ReturnsValue;
}

export interface SettingDetailsSetting {
    extends:              string;
    additionalProperties: boolean;
}

export interface SettingDetailsSettingInt {
    extends:              string;
    properties:           SettingDetailsSettingIntProperties;
    additionalProperties: boolean;
}

export interface SettingDetailsSettingIntProperties {
    value:   ReturnsValue;
    default: ReturnsValue;
    minimum: AuthorClass;
    step:    AuthorClass;
    maximum: AuthorClass;
    options: Options;
}

export interface Options {
    type:  ReturnsElement;
    items: OptionsItems;
}

export interface OptionsItems {
    type:       ReturnsElement;
    properties: Properties52;
}

export interface Properties52 {
    label: ReturnsValue;
    value: ReturnsValue;
}

export interface SettingDetailsSettingList {
    extends:              string;
    properties:           SettingDetailsSettingListProperties;
    additionalProperties: boolean;
}

export interface SettingDetailsSettingListProperties {
    value:        AlbumidElement;
    default:      AlbumidElement;
    elementtype:  AlbumidElement;
    definition:   AlbumidElement;
    delimiter:    ReturnsValue;
    minimumItems: AuthorClass;
    maximumItems: AuthorClass;
}

export interface SettingDetailsSettingNumber {
    extends:              string;
    properties:           SettingDetailsSettingNumberProperties;
    additionalProperties: boolean;
}

export interface SettingDetailsSettingNumberProperties {
    value:   ReturnsValue;
    default: ReturnsValue;
    minimum: ReturnsValue;
    step:    ReturnsValue;
    maximum: ReturnsValue;
}

export interface SettingDetailsSettingPath {
    extends:              string;
    properties:           SettingDetailsSettingPathProperties;
    additionalProperties: boolean;
}

export interface SettingDetailsSettingPathProperties {
    writable: ReturnsValue;
    sources:  ArrayInteger;
}

export interface SettingDetailsSettingString {
    extends:    string;
    properties: SettingDetailsSettingStringProperties;
}

export interface SettingDetailsSettingStringProperties {
    value:      ReturnsValue;
    default:    ReturnsValue;
    allowempty: ReturnsValue;
    options:    Options;
}

export interface SettingValue {
    type: ReturnsValue[];
}

export interface SettingsGetCategories {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      SettingsGetCategoriesParam[];
    returns:     SettingsGetCategoriesReturns;
}

export interface SettingsGetCategoriesParam {
    name:     string;
    $ref?:    ParamRef;
    default?: string;
    type?:    ReturnsElement;
    extends?: Extends;
    items?:   ApplicationPropertyName;
}

export interface SettingsGetCategoriesReturns {
    type:       ReturnsElement;
    properties: Properties53;
}

export interface Properties53 {
    categories: SettingValueList;
}

export interface SettingsGetSections {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      SettingsGetCategoriesParam[];
    returns:     SettingsGetSectionsReturns;
}

export interface SettingsGetSectionsReturns {
    type:       ReturnsElement;
    properties: Properties54;
}

export interface Properties54 {
    sections: SettingValueList;
}

export interface SettingsGetSettingValue {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      Language[];
    returns:     SettingsGetSettingValueReturns;
}

export interface SettingsGetSettingValueReturns {
    type:       ReturnsElement;
    properties: Properties55;
}

export interface Properties55 {
    value: AlbumidElement;
}

export interface SettingsGetSettings {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibrarySetAlbumDetailsParam[];
    returns:     SettingsGetSettingsReturns;
}

export interface SettingsGetSettingsReturns {
    type:       ReturnsElement;
    properties: Properties56;
}

export interface Properties56 {
    settings: SettingValueList;
}

export interface SettingsGetSkinSettingValue {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      SkinElement[];
    returns:     SettingsGetSkinSettingValueReturns;
}

export interface SettingsGetSkinSettingValueReturns {
    type:       ReturnsElement;
    properties: Properties57;
}

export interface Properties57 {
    value: FluffyValue;
}

export interface FluffyValue {
    type:     ReturnsElement[];
    required: boolean;
}

export interface SettingsGetSkinSettings {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    returns:     SettingsGetSkinSettingsReturns;
}

export interface SettingsGetSkinSettingsReturns {
    type:       ReturnsElement;
    properties: Properties58;
}

export interface Properties58 {
    skin:     SkinElement;
    settings: Settings;
}

export interface Settings {
    type:  ReturnsElement;
    items: SettingsItems;
}

export interface SettingsItems {
    type:       ReturnsElement;
    properties: Properties59;
}

export interface Properties59 {
    id:    Language;
    type:  Language;
    value: FluffyValue;
}

export interface SettingsResetSettingValue {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      RecordingidElement[];
    returns:     ReturnsElement;
}

export interface SettingsSetSkinSettingValue {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      SettingsSetSkinSettingValueParam[];
    returns:     ReturnsElement;
}

export interface SettingsSetSkinSettingValueParam {
    name:       string;
    type:       ReturnsElement[] | ReturnsElement;
    required:   boolean;
    minLength?: number;
}

export interface SystemOnQuit {
    type:        ApplicationOnVolumeChangedType;
    description: string;
    params:      Language[];
    returns:     null;
}

export interface SystemPropertyValue {
    type:       ReturnsElement;
    properties: SystemPropertyValueProperties;
}

export interface SystemPropertyValueProperties {
    canshutdown:  AuthorClass;
    cansuspend:   AuthorClass;
    canhibernate: AuthorClass;
    canreboot:    AuthorClass;
}

export interface TexturesDetailsSize {
    type:       ReturnsElement;
    properties: TexturesDetailsSizeProperties;
}

export interface TexturesDetailsSizeProperties {
    size:     DynpathClass;
    width:    DynpathClass;
    height:   DynpathClass;
    usecount: DynpathClass;
    lastused: DynpathClass;
}

export interface TexturesDetailsTexture {
    type:       ReturnsElement;
    properties: TexturesDetailsTextureProperties;
}

export interface TexturesDetailsTextureProperties {
    textureid:     Textureid;
    url:           DynpathClass;
    cachedurl:     DynpathClass;
    lasthashcheck: DynpathClass;
    imagehash:     DynpathClass;
    sizes:         SettingValueList;
}

export interface Textureid {
    $ref:     ParamRef;
    required: string;
}

export interface TexturesGetTextures {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetGenresParam[];
    returns:     TexturesGetTexturesReturns;
}

export interface TexturesGetTexturesReturns {
    type:       ReturnsElement;
    properties: Properties60;
}

export interface Properties60 {
    textures: Groups;
}

export interface VideoCast {
    type:  ReturnsElement;
    items: VideoCastItems;
}

export interface VideoCastItems {
    type:                 ReturnsElement;
    properties:           Properties61;
    additionalProperties: boolean;
}

export interface Properties61 {
    name:      ReturnsValue;
    role:      ReturnsValue;
    order:     ReturnsValue;
    thumbnail: AuthorClass;
}

export interface VideoDetailsBase {
    extends:    string;
    properties: VideoDetailsBaseProperties;
}

export interface VideoDetailsBaseProperties {
    playcount: AuthorClass;
    art:       AdditionalProperties;
}

export interface VideoDetailsEpisode {
    extends:    string;
    properties: VideoDetailsEpisodeProperties;
}

export interface VideoDetailsEpisodeProperties {
    episodeid:          AlbumidElement;
    votes:              AuthorClass;
    rating:             AuthorClass;
    writer:             AdditionalProperties;
    firstaired:         AuthorClass;
    productioncode:     AuthorClass;
    season:             AuthorClass;
    episode:            AuthorClass;
    uniqueid:           AdditionalProperties;
    originaltitle:      AuthorClass;
    showtitle:          AuthorClass;
    cast:               AdditionalProperties;
    tvshowid:           AdditionalProperties;
    specialsortseason:  AuthorClass;
    specialsortepisode: AuthorClass;
    userrating:         AuthorClass;
    seasonid:           AdditionalProperties;
    ratings:            AuthorClass;
    studio:             AdditionalProperties;
    genre:              AdditionalProperties;
}

export interface VideoDetailsFile {
    extends:    string;
    properties: VideoDetailsFileProperties;
}

export interface VideoDetailsFileProperties {
    runtime:       DynpathClass;
    director:      AdditionalProperties;
    streamdetails: AdditionalProperties;
    resume:        AdditionalProperties;
}

export interface VideoDetailsItem {
    extends:    string;
    properties: VideoDetailsItemProperties;
}

export interface VideoDetailsItemProperties {
    file:       AuthorClass;
    plot:       AuthorClass;
    lastplayed: AuthorClass;
    dateadded:  AuthorClass;
}

export interface VideoDetailsMedia {
    extends:    string;
    properties: VideoDetailsMediaProperties;
}

export interface VideoDetailsMediaProperties {
    title: AuthorClass;
}

export interface VideoDetailsMovie {
    extends:    string;
    properties: VideoDetailsMovieProperties;
}

export interface VideoDetailsMovieProperties {
    movieid:       AlbumidElement;
    genre:         AdditionalProperties;
    year:          AuthorClass;
    rating:        AuthorClass;
    trailer:       AuthorClass;
    tagline:       AuthorClass;
    plotoutline:   AuthorClass;
    originaltitle: AuthorClass;
    sorttitle:     AuthorClass;
    writer:        AdditionalProperties;
    studio:        AdditionalProperties;
    mpaa:          AuthorClass;
    cast:          AdditionalProperties;
    country:       AdditionalProperties;
    imdbnumber:    AuthorClass;
    set:           AuthorClass;
    showlink:      AdditionalProperties;
    top250:        AuthorClass;
    votes:         AuthorClass;
    setid:         AdditionalProperties;
    tag:           AdditionalProperties;
    userrating:    AuthorClass;
    ratings:       AuthorClass;
    premiered:     AuthorClass;
    uniqueid:      AdditionalProperties;
}

export interface VideoDetailsMovieSet {
    extends:    string;
    properties: VideoDetailsMovieSetProperties;
}

export interface VideoDetailsMovieSetProperties {
    setid: AlbumidElement;
    plot:  AuthorClass;
}

export interface VideoDetailsMovieSetExtended {
    extends:    string;
    properties: VideoDetailsMovieSetExtendedProperties;
}

export interface VideoDetailsMovieSetExtendedProperties {
    limits: AlbumidElement;
    movies: SettingValueList;
}

export interface VideoDetailsMusicVideo {
    extends:    string;
    properties: VideoDetailsMusicVideoProperties;
}

export interface VideoDetailsMusicVideoProperties {
    musicvideoid: AlbumidElement;
    studio:       AdditionalProperties;
    year:         AuthorClass;
    album:        AuthorClass;
    artist:       AdditionalProperties;
    genre:        AdditionalProperties;
    track:        AuthorClass;
    tag:          AdditionalProperties;
    rating:       AuthorClass;
    userrating:   AuthorClass;
    premiered:    AuthorClass;
    uniqueid:     AdditionalProperties;
}

export interface VideoDetailsSeason {
    extends:    string;
    properties: VideoDetailsSeasonProperties;
}

export interface VideoDetailsSeasonProperties {
    seasonid:        AlbumidElement;
    season:          ReturnsValue;
    showtitle:       AuthorClass;
    episode:         AuthorClass;
    watchedepisodes: AuthorClass;
    tvshowid:        AdditionalProperties;
    userrating:      AuthorClass;
    title:           AuthorClass;
}

export interface VideoDetailsTVShow {
    extends:    string;
    properties: VideoDetailsTVShowProperties;
}

export interface VideoDetailsTVShowProperties {
    tvshowid:        AlbumidElement;
    genre:           AdditionalProperties;
    year:            AuthorClass;
    rating:          AuthorClass;
    originaltitle:   AuthorClass;
    sorttitle:       AuthorClass;
    studio:          AdditionalProperties;
    mpaa:            AuthorClass;
    cast:            AdditionalProperties;
    episode:         AuthorClass;
    watchedepisodes: AuthorClass;
    imdbnumber:      AuthorClass;
    premiered:       AuthorClass;
    votes:           AuthorClass;
    episodeguide:    AuthorClass;
    season:          AuthorClass;
    tag:             AdditionalProperties;
    userrating:      AuthorClass;
    ratings:         AuthorClass;
    runtime:         DynpathClass;
    status:          DynpathClass;
    uniqueid:        AdditionalProperties;
}

export interface VideoRating {
    type:       ReturnsElement;
    properties: VideoRatingProperties;
}

export interface VideoRatingProperties {
    rating:  ReturnsValue;
    votes:   AuthorClass;
    default: AuthorClass;
}

export interface VideoResume {
    type:                 ReturnsElement;
    properties:           VideoResumeProperties;
    additionalProperties: boolean;
}

export interface VideoResumeProperties {
    position: Size;
    total:    Size;
}

export interface VideoStreams {
    type:                 ReturnsElement;
    properties:           VideoStreamsProperties;
    additionalProperties: boolean;
}

export interface VideoStreamsProperties {
    audio:    Audio;
    video:    Video;
    subtitle: Subtitle;
}

export interface Audio {
    type:     ReturnsElement;
    minItems: number;
    items:    AudioItems;
}

export interface AudioItems {
    type:                 ReturnsElement;
    properties:           Properties62;
    additionalProperties: boolean;
}

export interface Properties62 {
    codec:    AuthorClass;
    language: AuthorClass;
    channels: AuthorClass;
}

export interface Subtitle {
    type:     ReturnsElement;
    minItems: number;
    items:    SubtitleItems;
}

export interface SubtitleItems {
    type:                 ReturnsElement;
    properties:           Properties63;
    additionalProperties: boolean;
}

export interface Properties63 {
    language: AuthorClass;
}

export interface Video {
    type:     ReturnsElement;
    minItems: number;
    items:    VideoItems;
}

export interface VideoItems {
    type:                 ReturnsElement;
    properties:           Properties64;
    additionalProperties: boolean;
}

export interface Properties64 {
    codec:    AuthorClass;
    aspect:   AuthorClass;
    width:    AuthorClass;
    height:   AuthorClass;
    duration: AuthorClass;
    hdrtype:  AuthorClass;
}

export interface VideoLibraryGetAvailableArt {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      VideoLibraryGetAvailableArtParam[];
    returns:     AudioLibraryGetAvailableArtReturns;
}

export interface VideoLibraryGetAvailableArtParam {
    name:      string;
    required?: boolean;
    type:      BraggadociousType[] | ReturnsElement;
}

export interface BraggadociousType {
    type:                 ReturnsElement;
    properties:           Properties65;
    additionalProperties: boolean;
}

export interface Properties65 {
    episodeid?:    AlbumidElement;
    tvshowid?:     AlbumidElement;
    seasonid?:     AlbumidElement;
    movieid?:      AlbumidElement;
    setid?:        AlbumidElement;
    musicvideoid?: AlbumidElement;
}

export interface VideoLibraryGetAvailableArtTypes {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      VideoLibraryGetAvailableArtTypesParam[];
    returns:     AudioLibraryGetAvailableArtTypesReturns;
}

export interface VideoLibraryGetAvailableArtTypesParam {
    name:     string;
    required: boolean;
    type:     BraggadociousType[];
}

export interface VideoLibraryGetEpisodeDetails {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      SkinElement[];
    returns:     VideoLibraryGetEpisodeDetailsReturns;
}

export interface VideoLibraryGetEpisodeDetailsReturns {
    type:       ReturnsElement;
    properties: Properties66;
}

export interface Properties66 {
    episodedetails: AdditionalProperties;
}

export interface VideoLibraryGetEpisodes {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      VideoLibraryGetEpisodesParam[];
    returns:     VideoLibraryGetEpisodesReturns;
}

export interface VideoLibraryGetEpisodesParam {
    name:     PurpleName;
    $ref?:    string;
    type?:    Type1[] | ReturnsElement;
    minimum?: number;
    default?: number;
}

export interface Type1 {
    type?:                 ReturnsElement;
    properties?:           Properties67;
    additionalProperties?: boolean;
    $ref?:                 string;
}

export interface Properties67 {
    genreid?:  RecordingidElement;
    genre?:    RecordingidElement;
    year?:     LibraryID;
    actor?:    RecordingidElement;
    director?: RecordingidElement;
}

export interface VideoLibraryGetEpisodesReturns {
    type:       ReturnsElement;
    properties: Properties68;
}

export interface Properties68 {
    limits:   AlbumidElement;
    episodes: SettingValueList;
}

export interface VideoLibraryGetGenres {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      FileElement[];
    returns:     AudioLibraryGetGenresReturns;
}

export interface VideoLibraryGetInProgressTVShows {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetGenresParam[];
    returns:     VideoLibraryGetInProgressTVShowsReturns;
}

export interface VideoLibraryGetInProgressTVShowsReturns {
    type:       ReturnsElement;
    properties: Properties69;
}

export interface Properties69 {
    limits:  AlbumidElement;
    tvshows: SettingValueList;
}

export interface VideoLibraryGetMovieDetails {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AddonsGetAddonDetailsParam[];
    returns:     VideoLibraryGetMovieDetailsReturns;
}

export interface VideoLibraryGetMovieDetailsReturns {
    type:       ReturnsElement;
    properties: Properties70;
}

export interface Properties70 {
    moviedetails: AdditionalProperties;
}

export interface VideoLibraryGetMovieSetDetails {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      FileElement[];
    returns:     VideoLibraryGetMovieSetDetailsReturns;
}

export interface VideoLibraryGetMovieSetDetailsReturns {
    type:       ReturnsElement;
    properties: Properties71;
}

export interface Properties71 {
    setdetails: AdditionalProperties;
}

export interface VideoLibraryGetMovieSets {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetGenresParam[];
    returns:     VideoLibraryGetMovieSetsReturns;
}

export interface VideoLibraryGetMovieSetsReturns {
    type:       ReturnsElement;
    properties: Properties72;
}

export interface Properties72 {
    limits: AlbumidElement;
    sets:   SettingValueList;
}

export interface VideoLibraryGetMovies {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      VideoLibraryGetMoviesParam[];
    returns:     VideoLibraryGetMoviesReturns;
}

export interface VideoLibraryGetMoviesParam {
    name:  PurpleName;
    $ref?: string;
    type?: Type2[];
}

export interface Type2 {
    type?:                 ReturnsElement;
    properties?:           Properties73;
    additionalProperties?: boolean;
    $ref?:                 string;
}

export interface Properties73 {
    genreid?:  AlbumidElement;
    genre?:    RecordingidElement;
    year?:     LibraryID;
    actor?:    RecordingidElement;
    director?: RecordingidElement;
    studio?:   Filetype;
    country?:  RecordingidElement;
    setid?:    AlbumidElement;
    set?:      Filetype;
    tag?:      Filetype;
}

export interface VideoLibraryGetMoviesReturns {
    type:       ReturnsElement;
    properties: VideoDetailsMovieSetExtendedProperties;
}

export interface VideoLibraryGetMusicVideoDetails {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibrarySetAlbumDetailsParam[];
    returns:     VideoLibraryGetMusicVideoDetailsReturns;
}

export interface VideoLibraryGetMusicVideoDetailsReturns {
    type:       ReturnsElement;
    properties: Properties74;
}

export interface Properties74 {
    musicvideodetails: AdditionalProperties;
}

export interface VideoLibraryGetMusicVideos {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      VideoLibraryGetMusicVideosParam[];
    returns:     VideoLibraryGetMusicVideosReturns;
}

export interface VideoLibraryGetMusicVideosParam {
    name:  PurpleName;
    $ref?: string;
    type?: Type3[];
}

export interface Type3 {
    type?:                 ReturnsElement;
    properties?:           Properties75;
    additionalProperties?: boolean;
    $ref?:                 string;
}

export interface Properties75 {
    artist?:   Language;
    genreid?:  AlbumidElement;
    genre?:    Language;
    year?:     LibraryID;
    director?: Language;
    studio?:   SkinElement;
    tag?:      SkinElement;
}

export interface VideoLibraryGetMusicVideosReturns {
    type:       ReturnsElement;
    properties: Properties76;
}

export interface Properties76 {
    limits:      AlbumidElement;
    musicvideos: SettingValueList;
}

export interface VideoLibraryGetRecentlyAddedEpisodes {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetGenresParam[];
    returns:     VideoLibraryGetEpisodesReturns;
}

export interface VideoLibraryGetRecentlyAddedMovies {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetGenresParam[];
    returns:     VideoLibraryGetMoviesReturns;
}

export interface VideoLibraryGetRecentlyAddedMusicVideos {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetGenresParam[];
    returns:     VideoLibraryGetMusicVideosReturns;
}

export interface VideoLibraryGetSeasonDetails {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      PVRRecordParam[];
    returns:     VideoLibraryGetSeasonDetailsReturns;
}

export interface VideoLibraryGetSeasonDetailsReturns {
    type:       ReturnsElement;
    properties: Properties77;
}

export interface Properties77 {
    seasondetails: AdditionalProperties;
}

export interface VideoLibraryGetSeasons {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AudioLibraryGetGenresParam[];
    returns:     VideoLibraryGetSeasonsReturns;
}

export interface VideoLibraryGetSeasonsReturns {
    type:       ReturnsElement;
    properties: Properties78;
}

export interface Properties78 {
    limits:  AlbumidElement;
    seasons: SettingValueList;
}

export interface VideoLibraryGetTVShowDetails {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      RecordingidElement[];
    returns:     VideoLibraryGetTVShowDetailsReturns;
}

export interface VideoLibraryGetTVShowDetailsReturns {
    type:       ReturnsElement;
    properties: Properties79;
}

export interface Properties79 {
    tvshowdetails: AdditionalProperties;
}

export interface VideoLibraryGetTVShows {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      VideoLibraryGetTVShowsParam[];
    returns:     VideoLibraryGetInProgressTVShowsReturns;
}

export interface VideoLibraryGetTVShowsParam {
    name:  PurpleName;
    $ref?: string;
    type?: Type4[];
}

export interface Type4 {
    type?:                 ReturnsElement;
    properties?:           Properties80;
    additionalProperties?: boolean;
    $ref?:                 string;
}

export interface Properties80 {
    genreid?: AlbumidElement;
    genre?:   Filetype;
    year?:    LibraryID;
    actor?:   Filetype;
    studio?:  Language;
    tag?:     Language;
}

export interface VideoLibraryGetTags {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      AddonsGetAddonDetailsParam[];
    returns:     VideoLibraryGetTagsReturns;
}

export interface VideoLibraryGetTagsReturns {
    type:       ReturnsElement;
    properties: Properties81;
}

export interface Properties81 {
    limits: AlbumidElement;
    tags:   Groups;
}

export interface VideoLibraryOnExport {
    type:        ApplicationOnVolumeChangedType;
    description: string;
    params:      SkinElement[];
    returns:     null;
}

export interface VideoLibraryRefresh {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      VideoLibraryRefreshEpisodeParam[];
    returns:     ReturnsElement;
}

export interface VideoLibraryRefreshEpisodeParam {
    name:         string;
    $ref?:        ParamRef;
    required:     boolean | string;
    type?:        ReturnsElement;
    default?:     boolean | string;
    description?: string;
}

export interface XbmcGetInfo {
    type:        AddonsExecuteAddonType;
    description: string;
    transport:   Transport;
    permission:  string;
    params:      XBMCGetInfoBooleansParam[];
    returns:     TypeReturns;
}

export interface XBMCGetInfoBooleansParam {
    name:         string;
    type:         ReturnsElement;
    required:     boolean;
    items:        AuthorClass;
    minItems:     number;
    description?: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toKodiJSONRPC(json: string): KodiJSONRPC {
        return cast(JSON.parse(json), r("KodiJSONRPC"));
    }

    public static kodiJSONRPCToJson(value: KodiJSONRPC): string {
        return JSON.stringify(uncast(value, r("KodiJSONRPC")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "KodiJSONRPC": o([
        { json: "JSONRPC.Introspect", js: "JSONRPC.Introspect", typ: u(undefined, r("AudioLibraryClean")) },
        { json: "JSONRPC.Version", js: "JSONRPC.Version", typ: u(undefined, r("JSONRPCVersion")) },
        { json: "JSONRPC.Permission", js: "JSONRPC.Permission", typ: u(undefined, r("JSONRPCPermission")) },
        { json: "JSONRPC.Ping", js: "JSONRPC.Ping", typ: u(undefined, r("AudioLibraryClean")) },
        { json: "JSONRPC.GetConfiguration", js: "JSONRPC.GetConfiguration", typ: u(undefined, r("JsonrpcGetConfiguration")) },
        { json: "JSONRPC.SetConfiguration", js: "JSONRPC.SetConfiguration", typ: u(undefined, r("JsonrpcGetConfiguration")) },
        { json: "JSONRPC.NotifyAll", js: "JSONRPC.NotifyAll", typ: u(undefined, r("JsonrpcNotifyAll")) },
        { json: "Player.Open", js: "Player.Open", typ: u(undefined, r("PlayerOpen")) },
        { json: "Player.GetActivePlayers", js: "Player.GetActivePlayers", typ: u(undefined, r("PlayerGetActivePlayers")) },
        { json: "Player.GetPlayers", js: "Player.GetPlayers", typ: u(undefined, r("PlayerGetPlayers")) },
        { json: "Player.GetProperties", js: "Player.GetProperties", typ: u(undefined, r("GetProperties")) },
        { json: "Player.GetItem", js: "Player.GetItem", typ: u(undefined, r("PlayerGetItem")) },
        { json: "Player.PlayPause", js: "Player.PlayPause", typ: u(undefined, r("JsonrpcGetConfiguration")) },
        { json: "Player.Stop", js: "Player.Stop", typ: u(undefined, r("InputExecuteAction")) },
        { json: "Player.GetAudioDelay", js: "Player.GetAudioDelay", typ: u(undefined, r("PlayerEtAudioDelay")) },
        { json: "Player.SetAudioDelay", js: "Player.SetAudioDelay", typ: u(undefined, r("PlayerEtAudioDelay")) },
        { json: "Player.SetSpeed", js: "Player.SetSpeed", typ: u(undefined, r("JsonrpcGetConfiguration")) },
        { json: "Player.SetTempo", js: "Player.SetTempo", typ: u(undefined, r("JsonrpcGetConfiguration")) },
        { json: "Player.Seek", js: "Player.Seek", typ: u(undefined, r("PlayerSeek")) },
        { json: "Player.Move", js: "Player.Move", typ: u(undefined, r("PlayerMove")) },
        { json: "Player.Zoom", js: "Player.Zoom", typ: u(undefined, r("AddonsSetAddonEnabled")) },
        { json: "Player.SetViewMode", js: "Player.SetViewMode", typ: u(undefined, r("PlayerSetViewMode")) },
        { json: "Player.GetViewMode", js: "Player.GetViewMode", typ: u(undefined, r("PlayerGetViewMode")) },
        { json: "Player.Rotate", js: "Player.Rotate", typ: u(undefined, r("AddonsSetAddonEnabled")) },
        { json: "Player.GoTo", js: "Player.GoTo", typ: u(undefined, r("PVRScan")) },
        { json: "Player.SetShuffle", js: "Player.SetShuffle", typ: u(undefined, r("InputExecuteAction")) },
        { json: "Player.SetRepeat", js: "Player.SetRepeat", typ: u(undefined, r("PVRRecord")) },
        { json: "Player.SetPartymode", js: "Player.SetPartymode", typ: u(undefined, r("InputExecuteAction")) },
        { json: "Player.SetAudioStream", js: "Player.SetAudioStream", typ: u(undefined, r("PlayerSetOStream")) },
        { json: "Player.SetVideoStream", js: "Player.SetVideoStream", typ: u(undefined, r("PlayerSetOStream")) },
        { json: "Player.AddSubtitle", js: "Player.AddSubtitle", typ: u(undefined, r("AddonsSetAddonEnabled")) },
        { json: "Player.SetSubtitle", js: "Player.SetSubtitle", typ: u(undefined, r("PlayerSetSubtitle")) },
        { json: "Playlist.GetPlaylists", js: "Playlist.GetPlaylists", typ: u(undefined, r("PlaylistGetPlaylists")) },
        { json: "Playlist.GetProperties", js: "Playlist.GetProperties", typ: u(undefined, r("GetProperties")) },
        { json: "Playlist.GetItems", js: "Playlist.GetItems", typ: u(undefined, r("PlaylistGetItems")) },
        { json: "Playlist.Add", js: "Playlist.Add", typ: u(undefined, r("Playlist")) },
        { json: "Playlist.Insert", js: "Playlist.Insert", typ: u(undefined, r("Playlist")) },
        { json: "Playlist.Remove", js: "Playlist.Remove", typ: u(undefined, r("InputExecuteAction")) },
        { json: "Playlist.Clear", js: "Playlist.Clear", typ: u(undefined, r("InputExecuteAction")) },
        { json: "Playlist.Swap", js: "Playlist.Swap", typ: u(undefined, r("InputExecuteAction")) },
        { json: "Files.GetSources", js: "Files.GetSources", typ: u(undefined, r("FilesGetSources")) },
        { json: "Files.PrepareDownload", js: "Files.PrepareDownload", typ: u(undefined, r("FilesPrepareDownload")) },
        { json: "Files.Download", js: "Files.Download", typ: u(undefined, r("FilesDownload")) },
        { json: "Files.GetDirectory", js: "Files.GetDirectory", typ: u(undefined, r("FilesGetDirectory")) },
        { json: "Files.GetFileDetails", js: "Files.GetFileDetails", typ: u(undefined, r("FilesGetFileDetails")) },
        { json: "Files.SetFileDetails", js: "Files.SetFileDetails", typ: u(undefined, r("FilesSetFileDetails")) },
        { json: "AudioLibrary.GetProperties", js: "AudioLibrary.GetProperties", typ: u(undefined, r("GetProperties")) },
        { json: "AudioLibrary.GetArtists", js: "AudioLibrary.GetArtists", typ: u(undefined, r("AudioLibraryGetArtists")) },
        { json: "AudioLibrary.GetArtistDetails", js: "AudioLibrary.GetArtistDetails", typ: u(undefined, r("AudioLibraryGetArtistDetails")) },
        { json: "AudioLibrary.GetAlbums", js: "AudioLibrary.GetAlbums", typ: u(undefined, r("AudioLibraryGetAlbums")) },
        { json: "AudioLibrary.GetAlbumDetails", js: "AudioLibrary.GetAlbumDetails", typ: u(undefined, r("AudioLibraryGetAlbumDetails")) },
        { json: "AudioLibrary.GetSongs", js: "AudioLibrary.GetSongs", typ: u(undefined, r("AudioLibraryGetSongs")) },
        { json: "AudioLibrary.GetSongDetails", js: "AudioLibrary.GetSongDetails", typ: u(undefined, r("AudioLibraryGetSongDetails")) },
        { json: "AudioLibrary.GetRecentlyAddedAlbums", js: "AudioLibrary.GetRecentlyAddedAlbums", typ: u(undefined, r("AudioLibraryGetRecentlyEdAlbums")) },
        { json: "AudioLibrary.GetRecentlyAddedSongs", js: "AudioLibrary.GetRecentlyAddedSongs", typ: u(undefined, r("AudioLibraryGetRecentlyAddedSongs")) },
        { json: "AudioLibrary.GetRecentlyPlayedAlbums", js: "AudioLibrary.GetRecentlyPlayedAlbums", typ: u(undefined, r("AudioLibraryGetRecentlyEdAlbums")) },
        { json: "AudioLibrary.GetRecentlyPlayedSongs", js: "AudioLibrary.GetRecentlyPlayedSongs", typ: u(undefined, r("AudioLibraryGetRecentlyPlayedSongs")) },
        { json: "AudioLibrary.GetGenres", js: "AudioLibrary.GetGenres", typ: u(undefined, r("AudioLibraryGetGenres")) },
        { json: "AudioLibrary.GetSources", js: "AudioLibrary.GetSources", typ: u(undefined, r("AudioLibraryGetSources")) },
        { json: "AudioLibrary.GetRoles", js: "AudioLibrary.GetRoles", typ: u(undefined, r("AudioLibraryGetRoles")) },
        { json: "AudioLibrary.GetAvailableArtTypes", js: "AudioLibrary.GetAvailableArtTypes", typ: u(undefined, r("AudioLibraryGetAvailableArtTypes")) },
        { json: "AudioLibrary.GetAvailableArt", js: "AudioLibrary.GetAvailableArt", typ: u(undefined, r("AudioLibraryGetAvailableArt")) },
        { json: "AudioLibrary.SetArtistDetails", js: "AudioLibrary.SetArtistDetails", typ: u(undefined, r("Details")) },
        { json: "AudioLibrary.SetAlbumDetails", js: "AudioLibrary.SetAlbumDetails", typ: u(undefined, r("Details")) },
        { json: "AudioLibrary.SetSongDetails", js: "AudioLibrary.SetSongDetails", typ: u(undefined, r("Details")) },
        { json: "AudioLibrary.Scan", js: "AudioLibrary.Scan", typ: u(undefined, r("AudioLibraryScan")) },
        { json: "AudioLibrary.Export", js: "AudioLibrary.Export", typ: u(undefined, r("AudioLibraryExport")) },
        { json: "AudioLibrary.Clean", js: "AudioLibrary.Clean", typ: u(undefined, r("AudioLibraryClean")) },
        { json: "VideoLibrary.GetMovies", js: "VideoLibrary.GetMovies", typ: u(undefined, r("VideoLibraryGetMovies")) },
        { json: "VideoLibrary.GetMovieDetails", js: "VideoLibrary.GetMovieDetails", typ: u(undefined, r("VideoLibraryGetMovieDetails")) },
        { json: "VideoLibrary.GetMovieSets", js: "VideoLibrary.GetMovieSets", typ: u(undefined, r("VideoLibraryGetMovieSets")) },
        { json: "VideoLibrary.GetMovieSetDetails", js: "VideoLibrary.GetMovieSetDetails", typ: u(undefined, r("VideoLibraryGetMovieSetDetails")) },
        { json: "VideoLibrary.GetTVShows", js: "VideoLibrary.GetTVShows", typ: u(undefined, r("VideoLibraryGetTVShows")) },
        { json: "VideoLibrary.GetTVShowDetails", js: "VideoLibrary.GetTVShowDetails", typ: u(undefined, r("VideoLibraryGetTVShowDetails")) },
        { json: "VideoLibrary.GetSeasons", js: "VideoLibrary.GetSeasons", typ: u(undefined, r("VideoLibraryGetSeasons")) },
        { json: "VideoLibrary.GetSeasonDetails", js: "VideoLibrary.GetSeasonDetails", typ: u(undefined, r("VideoLibraryGetSeasonDetails")) },
        { json: "VideoLibrary.GetEpisodes", js: "VideoLibrary.GetEpisodes", typ: u(undefined, r("VideoLibraryGetEpisodes")) },
        { json: "VideoLibrary.GetEpisodeDetails", js: "VideoLibrary.GetEpisodeDetails", typ: u(undefined, r("VideoLibraryGetEpisodeDetails")) },
        { json: "VideoLibrary.GetMusicVideos", js: "VideoLibrary.GetMusicVideos", typ: u(undefined, r("VideoLibraryGetMusicVideos")) },
        { json: "VideoLibrary.GetMusicVideoDetails", js: "VideoLibrary.GetMusicVideoDetails", typ: u(undefined, r("VideoLibraryGetMusicVideoDetails")) },
        { json: "VideoLibrary.GetRecentlyAddedMovies", js: "VideoLibrary.GetRecentlyAddedMovies", typ: u(undefined, r("VideoLibraryGetRecentlyAddedMovies")) },
        { json: "VideoLibrary.GetRecentlyAddedEpisodes", js: "VideoLibrary.GetRecentlyAddedEpisodes", typ: u(undefined, r("VideoLibraryGetRecentlyAddedEpisodes")) },
        { json: "VideoLibrary.GetRecentlyAddedMusicVideos", js: "VideoLibrary.GetRecentlyAddedMusicVideos", typ: u(undefined, r("VideoLibraryGetRecentlyAddedMusicVideos")) },
        { json: "VideoLibrary.GetInProgressTVShows", js: "VideoLibrary.GetInProgressTVShows", typ: u(undefined, r("VideoLibraryGetInProgressTVShows")) },
        { json: "VideoLibrary.GetGenres", js: "VideoLibrary.GetGenres", typ: u(undefined, r("VideoLibraryGetGenres")) },
        { json: "VideoLibrary.GetTags", js: "VideoLibrary.GetTags", typ: u(undefined, r("VideoLibraryGetTags")) },
        { json: "VideoLibrary.GetAvailableArtTypes", js: "VideoLibrary.GetAvailableArtTypes", typ: u(undefined, r("VideoLibraryGetAvailableArtTypes")) },
        { json: "VideoLibrary.GetAvailableArt", js: "VideoLibrary.GetAvailableArt", typ: u(undefined, r("VideoLibraryGetAvailableArt")) },
        { json: "VideoLibrary.SetMovieDetails", js: "VideoLibrary.SetMovieDetails", typ: u(undefined, r("Details")) },
        { json: "VideoLibrary.SetMovieSetDetails", js: "VideoLibrary.SetMovieSetDetails", typ: u(undefined, r("Details")) },
        { json: "VideoLibrary.SetTVShowDetails", js: "VideoLibrary.SetTVShowDetails", typ: u(undefined, r("Details")) },
        { json: "VideoLibrary.SetSeasonDetails", js: "VideoLibrary.SetSeasonDetails", typ: u(undefined, r("Details")) },
        { json: "VideoLibrary.SetEpisodeDetails", js: "VideoLibrary.SetEpisodeDetails", typ: u(undefined, r("Details")) },
        { json: "VideoLibrary.SetMusicVideoDetails", js: "VideoLibrary.SetMusicVideoDetails", typ: u(undefined, r("Details")) },
        { json: "VideoLibrary.RefreshMovie", js: "VideoLibrary.RefreshMovie", typ: u(undefined, r("VideoLibraryRefresh")) },
        { json: "VideoLibrary.RefreshTVShow", js: "VideoLibrary.RefreshTVShow", typ: u(undefined, r("VideoLibraryRefresh")) },
        { json: "VideoLibrary.RefreshEpisode", js: "VideoLibrary.RefreshEpisode", typ: u(undefined, r("VideoLibraryRefresh")) },
        { json: "VideoLibrary.RefreshMusicVideo", js: "VideoLibrary.RefreshMusicVideo", typ: u(undefined, r("VideoLibraryRefresh")) },
        { json: "VideoLibrary.RemoveMovie", js: "VideoLibrary.RemoveMovie", typ: u(undefined, r("InputExecuteAction")) },
        { json: "VideoLibrary.RemoveTVShow", js: "VideoLibrary.RemoveTVShow", typ: u(undefined, r("InputExecuteAction")) },
        { json: "VideoLibrary.RemoveEpisode", js: "VideoLibrary.RemoveEpisode", typ: u(undefined, r("InputExecuteAction")) },
        { json: "VideoLibrary.RemoveMusicVideo", js: "VideoLibrary.RemoveMusicVideo", typ: u(undefined, r("InputExecuteAction")) },
        { json: "VideoLibrary.Scan", js: "VideoLibrary.Scan", typ: u(undefined, r("AudioLibraryScan")) },
        { json: "VideoLibrary.Export", js: "VideoLibrary.Export", typ: u(undefined, r("AudioLibraryExport")) },
        { json: "VideoLibrary.Clean", js: "VideoLibrary.Clean", typ: u(undefined, r("AudioLibraryScan")) },
        { json: "GUI.ActivateWindow", js: "GUI.ActivateWindow", typ: u(undefined, r("GUIActivateWindow")) },
        { json: "GUI.ShowNotification", js: "GUI.ShowNotification", typ: u(undefined, r("GUIShowNotification")) },
        { json: "GUI.GetProperties", js: "GUI.GetProperties", typ: u(undefined, r("GetProperties")) },
        { json: "GUI.SetFullscreen", js: "GUI.SetFullscreen", typ: u(undefined, r("ApplicationSetMute")) },
        { json: "GUI.SetStereoscopicMode", js: "GUI.SetStereoscopicMode", typ: u(undefined, r("AddonsSetAddonEnabled")) },
        { json: "GUI.GetStereoscopicModes", js: "GUI.GetStereoscopicModes", typ: u(undefined, r("GUIGetStereoscopicModes")) },
        { json: "GUI.ActivateScreenSaver", js: "GUI.ActivateScreenSaver", typ: u(undefined, r("AddonsSetAddonEnabled")) },
        { json: "Addons.GetAddons", js: "Addons.GetAddons", typ: u(undefined, r("AddonsGetAddons")) },
        { json: "Addons.GetAddonDetails", js: "Addons.GetAddonDetails", typ: u(undefined, r("AddonsGetAddonDetails")) },
        { json: "Addons.SetAddonEnabled", js: "Addons.SetAddonEnabled", typ: u(undefined, r("AddonsSetAddonEnabled")) },
        { json: "Addons.ExecuteAddon", js: "Addons.ExecuteAddon", typ: u(undefined, r("AddonsExecuteAddon")) },
        { json: "PVR.GetProperties", js: "PVR.GetProperties", typ: u(undefined, r("GetProperties")) },
        { json: "PVR.GetChannelGroups", js: "PVR.GetChannelGroups", typ: u(undefined, r("PVRGetChannelGroups")) },
        { json: "PVR.GetChannelGroupDetails", js: "PVR.GetChannelGroupDetails", typ: u(undefined, r("PVRGetChannelGroupDetails")) },
        { json: "PVR.GetChannels", js: "PVR.GetChannels", typ: u(undefined, r("PVRGetChannels")) },
        { json: "PVR.GetChannelDetails", js: "PVR.GetChannelDetails", typ: u(undefined, r("PVRGetChannelDetails")) },
        { json: "PVR.GetClients", js: "PVR.GetClients", typ: u(undefined, r("PVRGetClients")) },
        { json: "PVR.GetBroadcasts", js: "PVR.GetBroadcasts", typ: u(undefined, r("PVRGetBroadcasts")) },
        { json: "PVR.GetBroadcastDetails", js: "PVR.GetBroadcastDetails", typ: u(undefined, r("PVRGetBroadcastDetails")) },
        { json: "PVR.GetBroadcastIsPlayable", js: "PVR.GetBroadcastIsPlayable", typ: u(undefined, r("PVRDeleteTimer")) },
        { json: "PVR.GetTimers", js: "PVR.GetTimers", typ: u(undefined, r("PVRGetTimers")) },
        { json: "PVR.GetTimerDetails", js: "PVR.GetTimerDetails", typ: u(undefined, r("PVRGetTimerDetails")) },
        { json: "PVR.AddTimer", js: "PVR.AddTimer", typ: u(undefined, r("AudioLibraryClean")) },
        { json: "PVR.DeleteTimer", js: "PVR.DeleteTimer", typ: u(undefined, r("PVRDeleteTimer")) },
        { json: "PVR.ToggleTimer", js: "PVR.ToggleTimer", typ: u(undefined, r("AudioLibraryClean")) },
        { json: "PVR.GetRecordings", js: "PVR.GetRecordings", typ: u(undefined, r("PVRGetRecordings")) },
        { json: "PVR.GetRecordingDetails", js: "PVR.GetRecordingDetails", typ: u(undefined, r("PVRGetRecordingDetails")) },
        { json: "PVR.Record", js: "PVR.Record", typ: u(undefined, r("PVRRecord")) },
        { json: "PVR.Scan", js: "PVR.Scan", typ: u(undefined, r("PVRScan")) },
        { json: "Textures.GetTextures", js: "Textures.GetTextures", typ: u(undefined, r("TexturesGetTextures")) },
        { json: "Textures.RemoveTexture", js: "Textures.RemoveTexture", typ: u(undefined, r("PVRDeleteTimer")) },
        { json: "Profiles.GetProfiles", js: "Profiles.GetProfiles", typ: u(undefined, r("ProfilesGetProfiles")) },
        { json: "Profiles.GetCurrentProfile", js: "Profiles.GetCurrentProfile", typ: u(undefined, r("ProfilesGetCurrentProfile")) },
        { json: "Profiles.LoadProfile", js: "Profiles.LoadProfile", typ: u(undefined, r("FavouritesAddFavourite")) },
        { json: "System.GetProperties", js: "System.GetProperties", typ: u(undefined, r("GetProperties")) },
        { json: "System.EjectOpticalDrive", js: "System.EjectOpticalDrive", typ: u(undefined, r("AddonsSetAddonEnabled")) },
        { json: "System.Shutdown", js: "System.Shutdown", typ: u(undefined, r("PVRDeleteTimer")) },
        { json: "System.Suspend", js: "System.Suspend", typ: u(undefined, r("PVRDeleteTimer")) },
        { json: "System.Hibernate", js: "System.Hibernate", typ: u(undefined, r("PVRDeleteTimer")) },
        { json: "System.Reboot", js: "System.Reboot", typ: u(undefined, r("PVRDeleteTimer")) },
        { json: "Input.SendText", js: "Input.SendText", typ: u(undefined, r("AudioLibraryClean")) },
        { json: "Input.ExecuteAction", js: "Input.ExecuteAction", typ: u(undefined, r("InputExecuteAction")) },
        { json: "Input.ButtonEvent", js: "Input.ButtonEvent", typ: u(undefined, r("InputButtonEvent")) },
        { json: "Input.Left", js: "Input.Left", typ: u(undefined, r("AudioLibraryClean")) },
        { json: "Input.Right", js: "Input.Right", typ: u(undefined, r("AudioLibraryExport")) },
        { json: "Input.Down", js: "Input.Down", typ: u(undefined, r("ApplicationSetVolume")) },
        { json: "Input.Up", js: "Input.Up", typ: u(undefined, r("AudioLibraryClean")) },
        { json: "Input.Select", js: "Input.Select", typ: u(undefined, r("AudioLibraryExport")) },
        { json: "Input.Back", js: "Input.Back", typ: u(undefined, r("AddonsExecuteAddon")) },
        { json: "Input.ContextMenu", js: "Input.ContextMenu", typ: u(undefined, r("ApplicationSetVolume")) },
        { json: "Input.Info", js: "Input.Info", typ: u(undefined, r("AudioLibraryClean")) },
        { json: "Input.Home", js: "Input.Home", typ: u(undefined, r("AudioLibraryClean")) },
        { json: "Input.ShowCodec", js: "Input.ShowCodec", typ: u(undefined, r("AudioLibraryClean")) },
        { json: "Input.ShowOSD", js: "Input.ShowOSD", typ: u(undefined, r("AudioLibraryClean")) },
        { json: "Input.ShowPlayerProcessInfo", js: "Input.ShowPlayerProcessInfo", typ: u(undefined, r("AudioLibraryClean")) },
        { json: "Application.GetProperties", js: "Application.GetProperties", typ: u(undefined, r("GetProperties")) },
        { json: "Application.SetVolume", js: "Application.SetVolume", typ: u(undefined, r("ApplicationSetVolume")) },
        { json: "Application.SetMute", js: "Application.SetMute", typ: u(undefined, r("ApplicationSetMute")) },
        { json: "Application.Quit", js: "Application.Quit", typ: u(undefined, r("AddonsExecuteAddon")) },
        { json: "XBMC.GetInfoLabels", js: "XBMC.GetInfoLabels", typ: u(undefined, r("XbmcGetInfo")) },
        { json: "XBMC.GetInfoBooleans", js: "XBMC.GetInfoBooleans", typ: u(undefined, r("XbmcGetInfo")) },
        { json: "Favourites.GetFavourites", js: "Favourites.GetFavourites", typ: u(undefined, r("FavouritesGetFavourites")) },
        { json: "Favourites.AddFavourite", js: "Favourites.AddFavourite", typ: u(undefined, r("FavouritesAddFavourite")) },
        { json: "Settings.GetSections", js: "Settings.GetSections", typ: u(undefined, r("SettingsGetSections")) },
        { json: "Settings.GetCategories", js: "Settings.GetCategories", typ: u(undefined, r("SettingsGetCategories")) },
        { json: "Settings.GetSettings", js: "Settings.GetSettings", typ: u(undefined, r("SettingsGetSettings")) },
        { json: "Settings.GetSettingValue", js: "Settings.GetSettingValue", typ: u(undefined, r("SettingsGetSettingValue")) },
        { json: "Settings.SetSettingValue", js: "Settings.SetSettingValue", typ: u(undefined, r("JsonrpcNotifyAll")) },
        { json: "Settings.ResetSettingValue", js: "Settings.ResetSettingValue", typ: u(undefined, r("SettingsResetSettingValue")) },
        { json: "Settings.GetSkinSettingValue", js: "Settings.GetSkinSettingValue", typ: u(undefined, r("SettingsGetSkinSettingValue")) },
        { json: "Settings.SetSkinSettingValue", js: "Settings.SetSkinSettingValue", typ: u(undefined, r("SettingsSetSkinSettingValue")) },
        { json: "Settings.GetSkinSettings", js: "Settings.GetSkinSettings", typ: u(undefined, r("SettingsGetSkinSettings")) },
        { json: "Optional.Boolean", js: "Optional.Boolean", typ: u(undefined, r("Optional")) },
        { json: "Optional.String", js: "Optional.String", typ: u(undefined, r("Optional")) },
        { json: "Optional.Integer", js: "Optional.Integer", typ: u(undefined, r("Optional")) },
        { json: "Optional.Number", js: "Optional.Number", typ: u(undefined, r("Optional")) },
        { json: "Array.String", js: "Array.String", typ: u(undefined, r("ArrayString")) },
        { json: "Array.Integer", js: "Array.Integer", typ: u(undefined, r("ArrayInteger")) },
        { json: "Global.Time", js: "Global.Time", typ: u(undefined, r("Time")) },
        { json: "Global.Weekday", js: "Global.Weekday", typ: u(undefined, r("ApplicationPropertyName")) },
        { json: "Global.IncrementDecrement", js: "Global.IncrementDecrement", typ: u(undefined, r("ApplicationPropertyName")) },
        { json: "Global.Toggle", js: "Global.Toggle", typ: u(undefined, r("GlobalToggle")) },
        { json: "Global.String.NotEmpty", js: "Global.String.NotEmpty", typ: u(undefined, r("GlobalStringNotEmpty")) },
        { json: "Configuration.Notifications", js: "Configuration.Notifications", typ: u(undefined, r("ConfigurationNotifications")) },
        { json: "Configuration", js: "Configuration", typ: u(undefined, r("Configuration")) },
        { json: "Files.Media", js: "Files.Media", typ: u(undefined, r("ApplicationPropertyName")) },
        { json: "List.Amount", js: "List.Amount", typ: u(undefined, r("LibraryID")) },
        { json: "List.Limits", js: "List.Limits", typ: u(undefined, r("ListLimits")) },
        { json: "List.LimitsReturned", js: "List.LimitsReturned", typ: u(undefined, r("ListLimitsReturned")) },
        { json: "List.Sort", js: "List.Sort", typ: u(undefined, r("ListSort")) },
        { json: "Library.Id", js: "Library.Id", typ: u(undefined, r("LibraryID")) },
        { json: "PVR.Channel.Type", js: "PVR.Channel.Type", typ: u(undefined, r("ApplicationPropertyName")) },
        { json: "Playlist.Id", js: "Playlist.Id", typ: u(undefined, r("LibraryID")) },
        { json: "Playlist.Type", js: "Playlist.Type", typ: u(undefined, r("ApplicationPropertyName")) },
        { json: "Playlist.Property.Name", js: "Playlist.Property.Name", typ: u(undefined, r("ApplicationPropertyName")) },
        { json: "Playlist.Property.Value", js: "Playlist.Property.Value", typ: u(undefined, r("PlaylistPropertyValue")) },
        { json: "Playlist.Position", js: "Playlist.Position", typ: u(undefined, r("LibraryID")) },
        { json: "Playlist.Item", js: "Playlist.Item", typ: u(undefined, r("PlaylistItem")) },
        { json: "Player.Id", js: "Player.Id", typ: u(undefined, r("LibraryID")) },
        { json: "Player.Type", js: "Player.Type", typ: u(undefined, r("ApplicationPropertyName")) },
        { json: "Player.Position.Percentage", js: "Player.Position.Percentage", typ: u(undefined, r("LibraryID")) },
        { json: "Player.Position.Time", js: "Player.Position.Time", typ: u(undefined, r("Time")) },
        { json: "Player.Speed", js: "Player.Speed", typ: u(undefined, r("PlayerSpeed")) },
        { json: "Player.Tempo", js: "Player.Tempo", typ: u(undefined, r("PlayerTempo")) },
        { json: "Player.ViewMode", js: "Player.ViewMode", typ: u(undefined, r("ApplicationPropertyName")) },
        { json: "Player.CustomViewMode", js: "Player.CustomViewMode", typ: u(undefined, r("PlayerCustomViewMode")) },
        { json: "Player.Repeat", js: "Player.Repeat", typ: u(undefined, r("ApplicationPropertyName")) },
        { json: "Player.Audio.Stream", js: "Player.Audio.Stream", typ: u(undefined, r("PlayerAudioStream")) },
        { json: "Player.Video.Stream", js: "Player.Video.Stream", typ: u(undefined, r("PlayerVideoStream")) },
        { json: "Player.Subtitle", js: "Player.Subtitle", typ: u(undefined, r("PlayerSubtitle")) },
        { json: "Player.Property.Name", js: "Player.Property.Name", typ: u(undefined, r("ApplicationPropertyName")) },
        { json: "Player.Property.Value", js: "Player.Property.Value", typ: u(undefined, r("PlayerPropertyValue")) },
        { json: "Notifications.Item.Type", js: "Notifications.Item.Type", typ: u(undefined, r("ApplicationPropertyName")) },
        { json: "Notifications.Item", js: "Notifications.Item", typ: u(undefined, r("NotificationsItem")) },
        { json: "Player.Notifications.Player", js: "Player.Notifications.Player", typ: u(undefined, r("PlayerNotificationsPlayer")) },
        { json: "Player.Notifications.Player.Seek", js: "Player.Notifications.Player.Seek", typ: u(undefined, r("PlayerNotificationsPlayerSeek")) },
        { json: "Player.Notifications.Data", js: "Player.Notifications.Data", typ: u(undefined, r("PlayerNotificationsData")) },
        { json: "Item.Fields.Base", js: "Item.Fields.Base", typ: u(undefined, r("ItemFieldsBase")) },
        { json: "Item.Details.Base", js: "Item.Details.Base", typ: u(undefined, r("ItemDetailsBase")) },
        { json: "Item.CustomProperties", js: "Item.CustomProperties", typ: u(undefined, r("ItemCustomProperties")) },
        { json: "Media.Details.Base", js: "Media.Details.Base", typ: u(undefined, r("MediaDetailsBase")) },
        { json: "Media.Artwork", js: "Media.Artwork", typ: u(undefined, r("MediaArtwork")) },
        { json: "Media.Artwork.Set", js: "Media.Artwork.Set", typ: u(undefined, r("MediaArtworkSet")) },
        { json: "Video.Rating", js: "Video.Rating", typ: u(undefined, r("VideoRating")) },
        { json: "Video.Ratings", js: "Video.Ratings", typ: u(undefined, r("ItemCustomProperties")) },
        { json: "Video.Ratings.Set", js: "Video.Ratings.Set", typ: u(undefined, r("Set")) },
        { json: "Media.UniqueID", js: "Media.UniqueID", typ: u(undefined, r("ItemCustomProperties")) },
        { json: "Media.UniqueID.Set", js: "Media.UniqueID.Set", typ: u(undefined, r("Set")) },
        { json: "Library.Fields.Source", js: "Library.Fields.Source", typ: u(undefined, r("AddonFields")) },
        { json: "Library.Details.Source", js: "Library.Details.Source", typ: u(undefined, r("LibraryDetailsSource")) },
        { json: "Library.Fields.Genre", js: "Library.Fields.Genre", typ: u(undefined, r("AddonFields")) },
        { json: "Library.Details.Genre", js: "Library.Details.Genre", typ: u(undefined, r("LibraryDetailsGenre")) },
        { json: "Library.Fields.Tag", js: "Library.Fields.Tag", typ: u(undefined, r("AddonFields")) },
        { json: "Library.Details.Tag", js: "Library.Details.Tag", typ: u(undefined, r("LibraryDetailsTag")) },
        { json: "Audio.Fields.Role", js: "Audio.Fields.Role", typ: u(undefined, r("AddonFields")) },
        { json: "Audio.Details.Role", js: "Audio.Details.Role", typ: u(undefined, r("AudioDetailsRole")) },
        { json: "Audio.Fields.Artist", js: "Audio.Fields.Artist", typ: u(undefined, r("AudioFieldsAlbum")) },
        { json: "Audio.Fields.Album", js: "Audio.Fields.Album", typ: u(undefined, r("AudioFieldsAlbum")) },
        { json: "Audio.Fields.Song", js: "Audio.Fields.Song", typ: u(undefined, r("AudioFieldsAlbum")) },
        { json: "Audio.Album.ReleaseType", js: "Audio.Album.ReleaseType", typ: u(undefined, r("AddonContent")) },
        { json: "Audio.Contributors", js: "Audio.Contributors", typ: u(undefined, r("AudioContributors")) },
        { json: "Audio.Artist.Roles", js: "Audio.Artist.Roles", typ: u(undefined, r("AudioArtistRoles")) },
        { json: "Audio.Details.Genres", js: "Audio.Details.Genres", typ: u(undefined, r("AudioDetailsGenres")) },
        { json: "Audio.Details.Base", js: "Audio.Details.Base", typ: u(undefined, r("AudioDetailsBase")) },
        { json: "Audio.Details.Media", js: "Audio.Details.Media", typ: u(undefined, r("AudioDetailsMedia")) },
        { json: "Audio.Details.Artist", js: "Audio.Details.Artist", typ: u(undefined, r("AudioDetailsArtist")) },
        { json: "Audio.Details.Album", js: "Audio.Details.Album", typ: u(undefined, r("AudioDetailsAlbum")) },
        { json: "Audio.Details.Song", js: "Audio.Details.Song", typ: u(undefined, r("AudioDetailsSong")) },
        { json: "Audio.Property.Name", js: "Audio.Property.Name", typ: u(undefined, r("ApplicationPropertyName")) },
        { json: "Audio.Property.Value", js: "Audio.Property.Value", typ: u(undefined, r("AudioPropertyValue")) },
        { json: "Video.Fields.Movie", js: "Video.Fields.Movie", typ: u(undefined, r("AudioFieldsAlbum")) },
        { json: "Video.Fields.MovieSet", js: "Video.Fields.MovieSet", typ: u(undefined, r("AddonFields")) },
        { json: "Video.Fields.TVShow", js: "Video.Fields.TVShow", typ: u(undefined, r("AudioFieldsAlbum")) },
        { json: "Video.Fields.Season", js: "Video.Fields.Season", typ: u(undefined, r("AddonFields")) },
        { json: "Video.Fields.Episode", js: "Video.Fields.Episode", typ: u(undefined, r("AudioFieldsAlbum")) },
        { json: "Video.Fields.MusicVideo", js: "Video.Fields.MusicVideo", typ: u(undefined, r("AudioFieldsAlbum")) },
        { json: "Video.Cast", js: "Video.Cast", typ: u(undefined, r("VideoCast")) },
        { json: "Video.Streams", js: "Video.Streams", typ: u(undefined, r("VideoStreams")) },
        { json: "Video.Resume", js: "Video.Resume", typ: u(undefined, r("VideoResume")) },
        { json: "Video.Details.Base", js: "Video.Details.Base", typ: u(undefined, r("VideoDetailsBase")) },
        { json: "Video.Details.Media", js: "Video.Details.Media", typ: u(undefined, r("VideoDetailsMedia")) },
        { json: "Video.Details.Item", js: "Video.Details.Item", typ: u(undefined, r("VideoDetailsItem")) },
        { json: "Video.Details.File", js: "Video.Details.File", typ: u(undefined, r("VideoDetailsFile")) },
        { json: "Video.Details.Movie", js: "Video.Details.Movie", typ: u(undefined, r("VideoDetailsMovie")) },
        { json: "Video.Details.MovieSet", js: "Video.Details.MovieSet", typ: u(undefined, r("VideoDetailsMovieSet")) },
        { json: "Video.Details.MovieSet.Extended", js: "Video.Details.MovieSet.Extended", typ: u(undefined, r("VideoDetailsMovieSetExtended")) },
        { json: "Video.Details.TVShow", js: "Video.Details.TVShow", typ: u(undefined, r("VideoDetailsTVShow")) },
        { json: "Video.Details.Season", js: "Video.Details.Season", typ: u(undefined, r("VideoDetailsSeason")) },
        { json: "Video.Details.Episode", js: "Video.Details.Episode", typ: u(undefined, r("VideoDetailsEpisode")) },
        { json: "Video.Details.MusicVideo", js: "Video.Details.MusicVideo", typ: u(undefined, r("VideoDetailsMusicVideo")) },
        { json: "PVR.Property.Name", js: "PVR.Property.Name", typ: u(undefined, r("ApplicationPropertyName")) },
        { json: "PVR.Property.Value", js: "PVR.Property.Value", typ: u(undefined, r("PVRPropertyValue")) },
        { json: "PVR.ChannelGroup.Id", js: "PVR.ChannelGroup.Id", typ: u(undefined, r("PVRChannelGroupID")) },
        { json: "PVR.Fields.Broadcast", js: "PVR.Fields.Broadcast", typ: u(undefined, r("AddonFields")) },
        { json: "PVR.Details.Broadcast", js: "PVR.Details.Broadcast", typ: u(undefined, r("PVRDetailsBroadcast")) },
        { json: "PVR.Fields.Channel", js: "PVR.Fields.Channel", typ: u(undefined, r("AddonFields")) },
        { json: "PVR.Details.Channel", js: "PVR.Details.Channel", typ: u(undefined, r("PVRDetailsChannel")) },
        { json: "PVR.Details.ChannelGroup", js: "PVR.Details.ChannelGroup", typ: u(undefined, r("PVRDetailsChannelGroup")) },
        { json: "PVR.Details.ChannelGroup.Extended", js: "PVR.Details.ChannelGroup.Extended", typ: u(undefined, r("PVRDetailsChannelGroupExtended")) },
        { json: "PVR.Fields.Client", js: "PVR.Fields.Client", typ: u(undefined, r("AddonFields")) },
        { json: "PVR.Details.Client", js: "PVR.Details.Client", typ: u(undefined, r("PVRDetailsClient")) },
        { json: "PVR.TimerState", js: "PVR.TimerState", typ: u(undefined, r("ApplicationPropertyName")) },
        { json: "PVR.Fields.Timer", js: "PVR.Fields.Timer", typ: u(undefined, r("AddonFields")) },
        { json: "PVR.Details.Timer", js: "PVR.Details.Timer", typ: u(undefined, r("PVRDetailsTimer")) },
        { json: "PVR.Fields.Recording", js: "PVR.Fields.Recording", typ: u(undefined, r("AddonFields")) },
        { json: "PVR.Details.Recording", js: "PVR.Details.Recording", typ: u(undefined, r("PVRDetailsRecording")) },
        { json: "Textures.Details.Size", js: "Textures.Details.Size", typ: u(undefined, r("TexturesDetailsSize")) },
        { json: "Textures.Fields.Texture", js: "Textures.Fields.Texture", typ: u(undefined, r("AddonFields")) },
        { json: "Textures.Details.Texture", js: "Textures.Details.Texture", typ: u(undefined, r("TexturesDetailsTexture")) },
        { json: "Profiles.Password", js: "Profiles.Password", typ: u(undefined, r("ProfilesPassword")) },
        { json: "Profiles.Fields.Profile", js: "Profiles.Fields.Profile", typ: u(undefined, r("AddonFields")) },
        { json: "Profiles.Details.Profile", js: "Profiles.Details.Profile", typ: u(undefined, r("ProfilesDetailsProfile")) },
        { json: "List.Filter.Rule", js: "List.Filter.Rule", typ: u(undefined, r("ListFilterRule")) },
        { json: "List.Filter.Rule.Movies", js: "List.Filter.Rule.Movies", typ: u(undefined, r("ListFilterRuleAlbumsClass")) },
        { json: "List.Filter.Rule.TVShows", js: "List.Filter.Rule.TVShows", typ: u(undefined, r("ListFilterRuleAlbumsClass")) },
        { json: "List.Filter.Rule.Episodes", js: "List.Filter.Rule.Episodes", typ: u(undefined, r("ListFilterRuleAlbumsClass")) },
        { json: "List.Filter.Rule.MusicVideos", js: "List.Filter.Rule.MusicVideos", typ: u(undefined, r("ListFilterRuleAlbumsClass")) },
        { json: "List.Filter.Rule.Artists", js: "List.Filter.Rule.Artists", typ: u(undefined, r("ListFilterRuleAlbumsClass")) },
        { json: "List.Filter.Rule.Albums", js: "List.Filter.Rule.Albums", typ: u(undefined, r("ListFilterRuleAlbumsClass")) },
        { json: "List.Filter.Rule.Songs", js: "List.Filter.Rule.Songs", typ: u(undefined, r("ListFilterRuleAlbumsClass")) },
        { json: "List.Filter.Rule.Textures", js: "List.Filter.Rule.Textures", typ: u(undefined, r("ListFilterRuleAlbumsClass")) },
        { json: "List.Filter.Movies", js: "List.Filter.Movies", typ: u(undefined, r("ListFilter")) },
        { json: "List.Filter.TVShows", js: "List.Filter.TVShows", typ: u(undefined, r("ListFilter")) },
        { json: "List.Filter.Episodes", js: "List.Filter.Episodes", typ: u(undefined, r("ListFilter")) },
        { json: "List.Filter.MusicVideos", js: "List.Filter.MusicVideos", typ: u(undefined, r("ListFilter")) },
        { json: "List.Filter.Artists", js: "List.Filter.Artists", typ: u(undefined, r("ListFilter")) },
        { json: "List.Filter.Albums", js: "List.Filter.Albums", typ: u(undefined, r("ListFilter")) },
        { json: "List.Filter.Songs", js: "List.Filter.Songs", typ: u(undefined, r("ListFilter")) },
        { json: "List.Filter.Textures", js: "List.Filter.Textures", typ: u(undefined, r("ListFilter")) },
        { json: "List.Item.Base", js: "List.Item.Base", typ: u(undefined, r("ListItemBase")) },
        { json: "List.Fields.All", js: "List.Fields.All", typ: u(undefined, r("AddonFields")) },
        { json: "List.Item.All", js: "List.Item.All", typ: u(undefined, r("ListItemAll")) },
        { json: "List.Fields.Files", js: "List.Fields.Files", typ: u(undefined, r("AddonFields")) },
        { json: "List.Item.File", js: "List.Item.File", typ: u(undefined, r("ListItemFile")) },
        { json: "List.Items.Sources", js: "List.Items.Sources", typ: u(undefined, r("ListItemsSources")) },
        { json: "Addon.Content", js: "Addon.Content", typ: u(undefined, r("AddonContent")) },
        { json: "Addon.Fields", js: "Addon.Fields", typ: u(undefined, r("AddonFields")) },
        { json: "Addon.Details", js: "Addon.Details", typ: u(undefined, r("AddonDetails")) },
        { json: "GUI.Stereoscopy.Mode", js: "GUI.Stereoscopy.Mode", typ: u(undefined, r("GUIStereoscopyMode")) },
        { json: "GUI.Property.Name", js: "GUI.Property.Name", typ: u(undefined, r("ApplicationPropertyName")) },
        { json: "GUI.Property.Value", js: "GUI.Property.Value", typ: u(undefined, r("GUIPropertyValue")) },
        { json: "System.Property.Name", js: "System.Property.Name", typ: u(undefined, r("ApplicationPropertyName")) },
        { json: "System.Property.Value", js: "System.Property.Value", typ: u(undefined, r("SystemPropertyValue")) },
        { json: "Application.Property.Name", js: "Application.Property.Name", typ: u(undefined, r("ApplicationPropertyName")) },
        { json: "Application.Property.Value", js: "Application.Property.Value", typ: u(undefined, r("ApplicationPropertyValue")) },
        { json: "Favourite.Fields.Favourite", js: "Favourite.Fields.Favourite", typ: u(undefined, r("AddonFields")) },
        { json: "Favourite.Type", js: "Favourite.Type", typ: u(undefined, r("ApplicationPropertyName")) },
        { json: "Favourite.Details.Favourite", js: "Favourite.Details.Favourite", typ: u(undefined, r("FavouriteDetailsFavourite")) },
        { json: "Setting.Type", js: "Setting.Type", typ: u(undefined, r("ApplicationPropertyName")) },
        { json: "Setting.Level", js: "Setting.Level", typ: u(undefined, r("ApplicationPropertyName")) },
        { json: "Setting.Value", js: "Setting.Value", typ: u(undefined, r("SettingValue")) },
        { json: "Setting.Value.List", js: "Setting.Value.List", typ: u(undefined, r("SettingValueList")) },
        { json: "Setting.Value.Extended", js: "Setting.Value.Extended", typ: u(undefined, r("GlobalToggle")) },
        { json: "Setting.Details.ControlBase", js: "Setting.Details.ControlBase", typ: u(undefined, r("SettingDetailsControlBase")) },
        { json: "Setting.Details.ControlCheckmark", js: "Setting.Details.ControlCheckmark", typ: u(undefined, r("SettingDetailsControl")) },
        { json: "Setting.Details.ControlSpinner", js: "Setting.Details.ControlSpinner", typ: u(undefined, r("SettingDetailsControlSpinner")) },
        { json: "Setting.Details.ControlHeading", js: "Setting.Details.ControlHeading", typ: u(undefined, r("SettingDetailsControlHeading")) },
        { json: "Setting.Details.ControlEdit", js: "Setting.Details.ControlEdit", typ: u(undefined, r("SettingDetailsControlEdit")) },
        { json: "Setting.Details.ControlButton", js: "Setting.Details.ControlButton", typ: u(undefined, r("SettingDetailsControlButton")) },
        { json: "Setting.Details.ControlList", js: "Setting.Details.ControlList", typ: u(undefined, r("SettingDetailsControlList")) },
        { json: "Setting.Details.ControlSlider", js: "Setting.Details.ControlSlider", typ: u(undefined, r("SettingDetailsControlSlider")) },
        { json: "Setting.Details.ControlRange", js: "Setting.Details.ControlRange", typ: u(undefined, r("SettingDetailsControlRange")) },
        { json: "Setting.Details.ControlLabel", js: "Setting.Details.ControlLabel", typ: u(undefined, r("SettingDetailsControl")) },
        { json: "Setting.Details.Control", js: "Setting.Details.Control", typ: u(undefined, r("SettingDetails")) },
        { json: "Setting.Details.Base", js: "Setting.Details.Base", typ: u(undefined, r("SettingDetailsBase")) },
        { json: "Setting.Details.SettingBase", js: "Setting.Details.SettingBase", typ: u(undefined, r("SettingDetailsSettingBase")) },
        { json: "Setting.Details.SettingBool", js: "Setting.Details.SettingBool", typ: u(undefined, r("SettingDetailsSettingBool")) },
        { json: "Setting.Details.SettingInt", js: "Setting.Details.SettingInt", typ: u(undefined, r("SettingDetailsSettingInt")) },
        { json: "Setting.Details.SettingNumber", js: "Setting.Details.SettingNumber", typ: u(undefined, r("SettingDetailsSettingNumber")) },
        { json: "Setting.Details.SettingString", js: "Setting.Details.SettingString", typ: u(undefined, r("SettingDetailsSettingString")) },
        { json: "Setting.Details.SettingAction", js: "Setting.Details.SettingAction", typ: u(undefined, r("SettingDetailsSettingAction")) },
        { json: "Setting.Details.SettingList", js: "Setting.Details.SettingList", typ: u(undefined, r("SettingDetailsSettingList")) },
        { json: "Setting.Details.SettingPath", js: "Setting.Details.SettingPath", typ: u(undefined, r("SettingDetailsSettingPath")) },
        { json: "Setting.Details.SettingAddon", js: "Setting.Details.SettingAddon", typ: u(undefined, r("SettingDetailsSettingAddon")) },
        { json: "Setting.Details.SettingDate", js: "Setting.Details.SettingDate", typ: u(undefined, r("SettingDetailsSetting")) },
        { json: "Setting.Details.SettingTime", js: "Setting.Details.SettingTime", typ: u(undefined, r("SettingDetailsSetting")) },
        { json: "Setting.Details.Setting", js: "Setting.Details.Setting", typ: u(undefined, r("SettingDetails")) },
        { json: "Setting.Details.Group", js: "Setting.Details.Group", typ: u(undefined, r("SettingDetailsGroup")) },
        { json: "Setting.Details.Category", js: "Setting.Details.Category", typ: u(undefined, r("SettingDetailsCategory")) },
        { json: "Setting.Details.Section", js: "Setting.Details.Section", typ: u(undefined, r("SettingDetailsSection")) },
        { json: "Player.OnPlay", js: "Player.OnPlay", typ: u(undefined, r("PlayerOn")) },
        { json: "Player.OnResume", js: "Player.OnResume", typ: u(undefined, r("PlayerOn")) },
        { json: "Player.OnAVStart", js: "Player.OnAVStart", typ: u(undefined, r("PlayerOn")) },
        { json: "Player.OnAVChange", js: "Player.OnAVChange", typ: u(undefined, r("PlayerOn")) },
        { json: "Player.OnPause", js: "Player.OnPause", typ: u(undefined, r("PlayerOn")) },
        { json: "Player.OnStop", js: "Player.OnStop", typ: u(undefined, r("ApplicationOnVolumeChanged")) },
        { json: "Player.OnSpeedChanged", js: "Player.OnSpeedChanged", typ: u(undefined, r("PlayerOn")) },
        { json: "Player.OnSeek", js: "Player.OnSeek", typ: u(undefined, r("Play")) },
        { json: "Player.OnPropertyChanged", js: "Player.OnPropertyChanged", typ: u(undefined, r("ApplicationOnVolumeChanged")) },
        { json: "Playlist.OnAdd", js: "Playlist.OnAdd", typ: u(undefined, r("PlaylistOnAdd")) },
        { json: "Playlist.OnRemove", js: "Playlist.OnRemove", typ: u(undefined, r("ApplicationOnVolumeChanged")) },
        { json: "Playlist.OnClear", js: "Playlist.OnClear", typ: u(undefined, r("Play")) },
        { json: "AudioLibrary.OnUpdate", js: "AudioLibrary.OnUpdate", typ: u(undefined, r("ApplicationOnVolumeChanged")) },
        { json: "AudioLibrary.OnRemove", js: "AudioLibrary.OnRemove", typ: u(undefined, r("OLibraryOnRemove")) },
        { json: "AudioLibrary.OnScanStarted", js: "AudioLibrary.OnScanStarted", typ: u(undefined, r("AudioLibraryOnCleanFinished")) },
        { json: "AudioLibrary.OnScanFinished", js: "AudioLibrary.OnScanFinished", typ: u(undefined, r("AudioLibraryOnCleanFinished")) },
        { json: "AudioLibrary.OnCleanStarted", js: "AudioLibrary.OnCleanStarted", typ: u(undefined, r("AudioLibraryOnCleanFinished")) },
        { json: "AudioLibrary.OnCleanFinished", js: "AudioLibrary.OnCleanFinished", typ: u(undefined, r("AudioLibraryOnCleanFinished")) },
        { json: "AudioLibrary.OnExport", js: "AudioLibrary.OnExport", typ: u(undefined, r("ApplicationOnVolumeChanged")) },
        { json: "VideoLibrary.OnUpdate", js: "VideoLibrary.OnUpdate", typ: u(undefined, r("SystemOnQuit")) },
        { json: "VideoLibrary.OnExport", js: "VideoLibrary.OnExport", typ: u(undefined, r("VideoLibraryOnExport")) },
        { json: "VideoLibrary.OnRemove", js: "VideoLibrary.OnRemove", typ: u(undefined, r("OLibraryOnRemove")) },
        { json: "VideoLibrary.OnScanStarted", js: "VideoLibrary.OnScanStarted", typ: u(undefined, r("AudioLibraryOnCleanFinished")) },
        { json: "VideoLibrary.OnScanFinished", js: "VideoLibrary.OnScanFinished", typ: u(undefined, r("AudioLibraryOnCleanFinished")) },
        { json: "VideoLibrary.OnCleanStarted", js: "VideoLibrary.OnCleanStarted", typ: u(undefined, r("AudioLibraryOnCleanFinished")) },
        { json: "VideoLibrary.OnCleanFinished", js: "VideoLibrary.OnCleanFinished", typ: u(undefined, r("AudioLibraryOnCleanFinished")) },
        { json: "VideoLibrary.OnRefresh", js: "VideoLibrary.OnRefresh", typ: u(undefined, r("AudioLibraryOnCleanFinished")) },
        { json: "System.OnQuit", js: "System.OnQuit", typ: u(undefined, r("SystemOnQuit")) },
        { json: "System.OnRestart", js: "System.OnRestart", typ: u(undefined, r("AudioLibraryOnCleanFinished")) },
        { json: "System.OnSleep", js: "System.OnSleep", typ: u(undefined, r("AudioLibraryOnCleanFinished")) },
        { json: "System.OnWake", js: "System.OnWake", typ: u(undefined, r("AudioLibraryOnCleanFinished")) },
        { json: "System.OnLowBattery", js: "System.OnLowBattery", typ: u(undefined, r("AudioLibraryOnCleanFinished")) },
        { json: "Application.OnVolumeChanged", js: "Application.OnVolumeChanged", typ: u(undefined, r("ApplicationOnVolumeChanged")) },
        { json: "Input.OnInputRequested", js: "Input.OnInputRequested", typ: u(undefined, r("ApplicationOnVolumeChanged")) },
        { json: "Input.OnInputFinished", js: "Input.OnInputFinished", typ: u(undefined, r("AudioLibraryOnCleanFinished")) },
        { json: "GUI.OnScreensaverActivated", js: "GUI.OnScreensaverActivated", typ: u(undefined, r("AudioLibraryOnCleanFinished")) },
        { json: "GUI.OnScreensaverDeactivated", js: "GUI.OnScreensaverDeactivated", typ: u(undefined, r("ApplicationOnVolumeChanged")) },
        { json: "GUI.OnDPMSActivated", js: "GUI.OnDPMSActivated", typ: u(undefined, r("AudioLibraryOnCleanFinished")) },
        { json: "GUI.OnDPMSDeactivated", js: "GUI.OnDPMSDeactivated", typ: u(undefined, r("AudioLibraryOnCleanFinished")) },
    ], false),
    "AddonContent": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "enum", js: "enum", typ: a("") },
        { json: "default", js: "default", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
    ], false),
    "AddonDetails": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("AddonDetailsProperties") },
    ], false),
    "AddonDetailsProperties": o([
        { json: "addonid", js: "addonid", typ: r("ReturnsValue") },
        { json: "type", js: "type", typ: r("AlbumidElement") },
        { json: "name", js: "name", typ: r("AuthorClass") },
        { json: "version", js: "version", typ: r("AuthorClass") },
        { json: "summary", js: "summary", typ: r("AuthorClass") },
        { json: "description", js: "description", typ: r("AuthorClass") },
        { json: "path", js: "path", typ: r("AuthorClass") },
        { json: "author", js: "author", typ: r("AuthorClass") },
        { json: "thumbnail", js: "thumbnail", typ: r("AuthorClass") },
        { json: "disclaimer", js: "disclaimer", typ: r("AuthorClass") },
        { json: "fanart", js: "fanart", typ: r("AuthorClass") },
        { json: "dependencies", js: "dependencies", typ: r("Dependencies") },
        { json: "broken", js: "broken", typ: r("Broken") },
        { json: "extrainfo", js: "extrainfo", typ: r("Extrainfo") },
        { json: "rating", js: "rating", typ: r("AuthorClass") },
        { json: "enabled", js: "enabled", typ: r("AuthorClass") },
        { json: "installed", js: "installed", typ: r("AuthorClass") },
        { json: "deprecated", js: "deprecated", typ: r("Broken") },
    ], false),
    "ReturnsValue": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "required", js: "required", typ: true },
    ], false),
    "AuthorClass": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
    ], false),
    "Broken": o([
        { json: "type", js: "type", typ: a(r("ReturnsElement")) },
    ], false),
    "Dependencies": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "items", js: "items", typ: r("DependenciesItems") },
    ], false),
    "DependenciesItems": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("PurpleProperties") },
    ], false),
    "PurpleProperties": o([
        { json: "addonid", js: "addonid", typ: r("ReturnsValue") },
        { json: "version", js: "version", typ: r("ReturnsValue") },
        { json: "optional", js: "optional", typ: r("ReturnsValue") },
    ], false),
    "Extrainfo": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "items", js: "items", typ: r("ExtrainfoItems") },
    ], false),
    "ExtrainfoItems": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("FluffyProperties") },
    ], false),
    "FluffyProperties": o([
        { json: "key", js: "key", typ: r("ReturnsValue") },
        { json: "value", js: "value", typ: r("ReturnsValue") },
    ], false),
    "AlbumidElement": o([
        { json: "$ref", js: "$ref", typ: "" },
        { json: "required", js: "required", typ: true },
    ], false),
    "AddonFields": o([
        { json: "extends", js: "extends", typ: r("Extends") },
        { json: "items", js: "items", typ: r("ApplicationPropertyName") },
    ], false),
    "ApplicationPropertyName": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "enum", js: "enum", typ: u(undefined, a("")) },
    ], false),
    "AddonsExecuteAddon": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonsExecuteAddonParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "AddonsExecuteAddonParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: u(a(r("TypeReturns")), r("ReturnsElement")) },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "default", js: "default", typ: u(undefined, u(true, "")) },
    ], false),
    "TypeReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "additionalProperties", js: "additionalProperties", typ: u(undefined, r("AuthorClass")) },
        { json: "items", js: "items", typ: u(undefined, r("AuthorClass")) },
        { json: "description", js: "description", typ: u(undefined, "") },
    ], false),
    "AddonsGetAddonDetails": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonsGetAddonDetailsParam")) },
        { json: "returns", js: "returns", typ: r("AddonsGetAddonDetailsReturns") },
    ], false),
    "AddonsGetAddonDetailsParam": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, u(a(r("PurpleType")), r("ReturnsElement"))) },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "properties", js: "properties", typ: u(undefined, r("TentacledProperties")) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "default", js: "default", typ: u(undefined, "") },
        { json: "enum", js: "enum", typ: u(undefined, a("")) },
        { json: "items", js: "items", typ: u(undefined, r("AdditionalProperties")) },
    ], false),
    "AdditionalProperties": o([
        { json: "$ref", js: "$ref", typ: "" },
    ], false),
    "TentacledProperties": o([
        { json: "volume", js: "volume", typ: u(undefined, r("LibraryID")) },
        { json: "muted", js: "muted", typ: u(undefined, r("ReturnsValue")) },
        { json: "file", js: "file", typ: u(undefined, r("FileElement")) },
        { json: "failcount", js: "failcount", typ: u(undefined, r("LibraryID")) },
        { json: "id", js: "id", typ: u(undefined, r("AlbumidElement")) },
        { json: "type", js: "type", typ: u(undefined, r("PropertiesType")) },
        { json: "transaction", js: "transaction", typ: u(undefined, r("Sorttokens")) },
        { json: "added", js: "added", typ: u(undefined, r("Sorttokens")) },
        { json: "shuttingdown", js: "shuttingdown", typ: u(undefined, r("ReturnsValue")) },
        { json: "value", js: "value", typ: u(undefined, r("ReturnsValue")) },
        { json: "title", js: "title", typ: u(undefined, r("AuthorClass")) },
        { json: "properties", js: "properties", typ: u(undefined, r("AdditionalProperties")) },
        { json: "limits", js: "limits", typ: u(undefined, r("AdditionalProperties")) },
        { json: "property", js: "property", typ: u(undefined, r("AdditionalProperties")) },
        { json: "player", js: "player", typ: u(undefined, r("AlbumidElement")) },
        { json: "item", js: "item", typ: u(undefined, r("AdditionalProperties")) },
        { json: "end", js: "end", typ: u(undefined, r("Language")) },
        { json: "playlistid", js: "playlistid", typ: u(undefined, r("AlbumidElement")) },
        { json: "position", js: "position", typ: u(undefined, r("AdditionalProperties")) },
    ], false),
    "Sorttokens": o([
        { json: "$ref", js: "$ref", typ: "" },
        { json: "description", js: "description", typ: "" },
    ], false),
    "LanguageProperties": o([
        { json: "exitcode", js: "exitcode", typ: u(undefined, r("LibraryID")) },
        { json: "id", js: "id", typ: u(undefined, r("AlbumidElement")) },
        { json: "type", js: "type", typ: u(undefined, r("Language")) },
        { json: "playcount", js: "playcount", typ: u(undefined, r("LibraryID")) },
        { json: "transaction", js: "transaction", typ: u(undefined, r("Sorttokens")) },
        { json: "added", js: "added", typ: u(undefined, r("Sorttokens")) },
    ], false),
    "Language": o([
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "minLength", js: "minLength", typ: u(undefined, 0) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "enum", js: "enum", typ: u(undefined, a("")) },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "minimum", js: "minimum", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "properties", js: "properties", typ: u(undefined, r("LanguageProperties")) },
        { json: "id", js: "id", typ: u(undefined, "") },
    ], false),
    "LibraryID": o([
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "minimum", js: "minimum", typ: u(undefined, 0) },
        { json: "maximum", js: "maximum", typ: u(undefined, 0) },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "default", js: "default", typ: u(undefined, 0) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "enum", js: "enum", typ: u(undefined, a("")) },
    ], false),
    "FileElement": o([
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "default", js: "default", typ: u(undefined, u(null, "")) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "properties", js: "properties", typ: u(undefined, r("RootProperties")) },
        { json: "enum", js: "enum", typ: u(undefined, a(u(0, ""))) },
        { json: "minLength", js: "minLength", typ: u(undefined, 0) },
    ], false),
    "RootProperties": o([
        { json: "item", js: "item", typ: u(undefined, r("AdditionalProperties")) },
        { json: "player", js: "player", typ: u(undefined, r("AlbumidElement")) },
        { json: "playlistid", js: "playlistid", typ: u(undefined, r("AlbumidElement")) },
        { json: "properties", js: "properties", typ: u(undefined, r("AdditionalProperties")) },
        { json: "limits", js: "limits", typ: u(undefined, r("AdditionalProperties")) },
        { json: "sort", js: "sort", typ: u(undefined, r("AdditionalProperties")) },
        { json: "id", js: "id", typ: u(undefined, r("AlbumidElement")) },
        { json: "type", js: "type", typ: u(undefined, r("AlbumidElement")) },
        { json: "transaction", js: "transaction", typ: u(undefined, r("Sorttokens")) },
    ], false),
    "PropertiesType": o([
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "required", js: "required", typ: true },
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "enum", js: "enum", typ: u(undefined, a("")) },
    ], false),
    "PurpleType": o([
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "enum", js: "enum", typ: u(undefined, a("")) },
        { json: "required", js: "required", typ: true },
        { json: "minimum", js: "minimum", typ: u(undefined, 0) },
        { json: "maximum", js: "maximum", typ: u(undefined, 0) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "items", js: "items", typ: u(undefined, r("AdditionalProperties")) },
    ], false),
    "AddonsGetAddonDetailsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("StickyProperties") },
    ], false),
    "StickyProperties": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "addon", js: "addon", typ: r("AlbumidElement") },
    ], false),
    "AddonsGetAddons": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonsGetAddonsParam")) },
        { json: "returns", js: "returns", typ: r("AddonsGetAddonsReturns") },
    ], false),
    "AddonsGetAddonsParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, a(r("ApplicationPropertyName"))) },
        { json: "default", js: "default", typ: u(undefined, u(true, "")) },
    ], false),
    "AddonsGetAddonsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("IndigoProperties") },
    ], false),
    "IndigoProperties": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "addons", js: "addons", typ: r("SettingValueList") },
    ], false),
    "SettingValueList": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "items", js: "items", typ: r("AdditionalProperties") },
    ], false),
    "AddonsSetAddonEnabled": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonsGetAddonDetailsParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "GetProperties": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("ApplicationGetPropertiesParam")) },
        { json: "returns", js: "returns", typ: r("AlbumidElement") },
    ], false),
    "ApplicationGetPropertiesParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "uniqueItems", js: "uniqueItems", typ: u(undefined, true) },
        { json: "required", js: "required", typ: true },
        { json: "items", js: "items", typ: u(undefined, r("AdditionalProperties")) },
        { json: "$ref", js: "$ref", typ: u(undefined, r("ParamRef")) },
    ], false),
    "ApplicationOnVolumeChanged": o([
        { json: "type", js: "type", typ: r("ApplicationOnVolumeChangedType") },
        { json: "description", js: "description", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonsGetAddonDetailsParam")) },
        { json: "returns", js: "returns", typ: null },
    ], false),
    "ApplicationPropertyValue": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("ApplicationPropertyValueProperties") },
    ], false),
    "ApplicationPropertyValueProperties": o([
        { json: "volume", js: "volume", typ: r("LibraryID") },
        { json: "muted", js: "muted", typ: r("AuthorClass") },
        { json: "name", js: "name", typ: r("GlobalStringNotEmpty") },
        { json: "version", js: "version", typ: r("PurpleVersion") },
        { json: "sorttokens", js: "sorttokens", typ: r("Sorttokens") },
        { json: "language", js: "language", typ: r("Language") },
    ], false),
    "GlobalStringNotEmpty": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "minLength", js: "minLength", typ: 0 },
    ], false),
    "PurpleVersion": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("IndecentProperties") },
    ], false),
    "IndecentProperties": o([
        { json: "major", js: "major", typ: r("LibraryID") },
        { json: "minor", js: "minor", typ: r("LibraryID") },
        { json: "revision", js: "revision", typ: r("Broken") },
        { json: "tag", js: "tag", typ: r("Filetype") },
        { json: "tagversion", js: "tagversion", typ: r("AuthorClass") },
    ], false),
    "Filetype": o([
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "enum", js: "enum", typ: u(undefined, a("")) },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "minLength", js: "minLength", typ: u(undefined, 0) },
    ], false),
    "ApplicationSetMute": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonsGetAddonDetailsParam")) },
        { json: "returns", js: "returns", typ: r("DynpathClass") },
    ], false),
    "DynpathClass": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "description", js: "description", typ: "" },
    ], false),
    "ApplicationSetVolume": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: r("Permission") },
        { json: "params", js: "params", typ: a(r("ApplicationSetVolumeParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "ApplicationSetVolumeParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: a(r("LibraryID")) },
        { json: "required", js: "required", typ: true },
    ], false),
    "ArrayInteger": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "items", js: "items", typ: r("AuthorClass") },
    ], false),
    "ArrayString": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "items", js: "items", typ: r("GlobalStringNotEmpty") },
    ], false),
    "AudioArtistRoles": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "items", js: "items", typ: r("AudioArtistRolesItems") },
    ], false),
    "AudioArtistRolesItems": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "description", js: "description", typ: "" },
        { json: "properties", js: "properties", typ: r("HilariousProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "HilariousProperties": o([
        { json: "roleid", js: "roleid", typ: r("AlbumidElement") },
        { json: "role", js: "role", typ: r("ReturnsValue") },
    ], false),
    "AudioContributors": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "items", js: "items", typ: r("AudioContributorsItems") },
    ], false),
    "AudioContributorsItems": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "description", js: "description", typ: "" },
        { json: "properties", js: "properties", typ: r("AmbitiousProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "AmbitiousProperties": o([
        { json: "name", js: "name", typ: r("ReturnsValue") },
        { json: "role", js: "role", typ: r("ReturnsValue") },
        { json: "roleid", js: "roleid", typ: r("AlbumidElement") },
        { json: "artistid", js: "artistid", typ: r("AlbumidElement") },
    ], false),
    "AudioDetailsAlbum": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("AudioDetailsAlbumProperties") },
    ], false),
    "AudioDetailsAlbumProperties": o([
        { json: "albumid", js: "albumid", typ: r("AlbumidElement") },
        { json: "description", js: "description", typ: r("AuthorClass") },
        { json: "theme", js: "theme", typ: r("AdditionalProperties") },
        { json: "mood", js: "mood", typ: r("AdditionalProperties") },
        { json: "style", js: "style", typ: r("AdditionalProperties") },
        { json: "type", js: "type", typ: r("AuthorClass") },
        { json: "albumlabel", js: "albumlabel", typ: r("AuthorClass") },
        { json: "playcount", js: "playcount", typ: r("AuthorClass") },
        { json: "compilation", js: "compilation", typ: r("AuthorClass") },
        { json: "releasetype", js: "releasetype", typ: r("AdditionalProperties") },
        { json: "musicbrainzreleasegroupid", js: "musicbrainzreleasegroupid", typ: r("AuthorClass") },
        { json: "musicbrainzalbumid", js: "musicbrainzalbumid", typ: r("AuthorClass") },
        { json: "songgenres", js: "songgenres", typ: r("AdditionalProperties") },
        { json: "lastplayed", js: "lastplayed", typ: r("AuthorClass") },
        { json: "sourceid", js: "sourceid", typ: r("AdditionalProperties") },
        { json: "isboxset", js: "isboxset", typ: r("AuthorClass") },
        { json: "totaldiscs", js: "totaldiscs", typ: r("AuthorClass") },
        { json: "albumstatus", js: "albumstatus", typ: r("AuthorClass") },
        { json: "albumduration", js: "albumduration", typ: r("AuthorClass") },
    ], false),
    "AudioDetailsArtist": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("AudioDetailsArtistProperties") },
    ], false),
    "AudioDetailsArtistProperties": o([
        { json: "artistid", js: "artistid", typ: r("AlbumidElement") },
        { json: "artist", js: "artist", typ: r("ReturnsValue") },
        { json: "instrument", js: "instrument", typ: r("AdditionalProperties") },
        { json: "style", js: "style", typ: r("AdditionalProperties") },
        { json: "mood", js: "mood", typ: r("AdditionalProperties") },
        { json: "born", js: "born", typ: r("AuthorClass") },
        { json: "formed", js: "formed", typ: r("AuthorClass") },
        { json: "description", js: "description", typ: r("AuthorClass") },
        { json: "died", js: "died", typ: r("AuthorClass") },
        { json: "disbanded", js: "disbanded", typ: r("AuthorClass") },
        { json: "yearsactive", js: "yearsactive", typ: r("AdditionalProperties") },
        { json: "compilationartist", js: "compilationartist", typ: r("AuthorClass") },
        { json: "musicbrainzartistid", js: "musicbrainzartistid", typ: r("AdditionalProperties") },
        { json: "roles", js: "roles", typ: r("AdditionalProperties") },
        { json: "songgenres", js: "songgenres", typ: r("AdditionalProperties") },
        { json: "isalbumartist", js: "isalbumartist", typ: r("AuthorClass") },
        { json: "sortname", js: "sortname", typ: r("AuthorClass") },
        { json: "type", js: "type", typ: r("AuthorClass") },
        { json: "gender", js: "gender", typ: r("AuthorClass") },
        { json: "disambiguation", js: "disambiguation", typ: r("AuthorClass") },
        { json: "sourceid", js: "sourceid", typ: r("AdditionalProperties") },
    ], false),
    "AudioDetailsBase": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("AudioDetailsBaseProperties") },
    ], false),
    "AudioDetailsBaseProperties": o([
        { json: "genre", js: "genre", typ: r("AdditionalProperties") },
        { json: "dateadded", js: "dateadded", typ: r("AuthorClass") },
        { json: "art", js: "art", typ: r("AdditionalProperties") },
    ], false),
    "AudioDetailsGenres": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "items", js: "items", typ: r("AudioDetailsGenresItems") },
    ], false),
    "AudioDetailsGenresItems": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("CunningProperties") },
    ], false),
    "CunningProperties": o([
        { json: "genreid", js: "genreid", typ: r("AlbumidElement") },
        { json: "title", js: "title", typ: r("AuthorClass") },
    ], false),
    "AudioDetailsMedia": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("AudioDetailsMediaProperties") },
    ], false),
    "AudioDetailsMediaProperties": o([
        { json: "title", js: "title", typ: r("AuthorClass") },
        { json: "artist", js: "artist", typ: r("AdditionalProperties") },
        { json: "year", js: "year", typ: r("AuthorClass") },
        { json: "rating", js: "rating", typ: r("AuthorClass") },
        { json: "musicbrainzalbumartistid", js: "musicbrainzalbumartistid", typ: r("AdditionalProperties") },
        { json: "artistid", js: "artistid", typ: r("AdditionalProperties") },
        { json: "displayartist", js: "displayartist", typ: r("AuthorClass") },
        { json: "votes", js: "votes", typ: r("AuthorClass") },
        { json: "userrating", js: "userrating", typ: r("AuthorClass") },
        { json: "sortartist", js: "sortartist", typ: r("AuthorClass") },
        { json: "releasedate", js: "releasedate", typ: r("AuthorClass") },
        { json: "originaldate", js: "originaldate", typ: r("AuthorClass") },
    ], false),
    "AudioDetailsRole": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("AudioDetailsRoleProperties") },
    ], false),
    "AudioDetailsRoleProperties": o([
        { json: "roleid", js: "roleid", typ: r("AlbumidElement") },
        { json: "title", js: "title", typ: r("AuthorClass") },
    ], false),
    "AudioDetailsSong": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("AudioDetailsSongProperties") },
    ], false),
    "AudioDetailsSongProperties": o([
        { json: "songid", js: "songid", typ: r("AlbumidElement") },
        { json: "file", js: "file", typ: r("AuthorClass") },
        { json: "albumartist", js: "albumartist", typ: r("AdditionalProperties") },
        { json: "album", js: "album", typ: r("AuthorClass") },
        { json: "track", js: "track", typ: r("AuthorClass") },
        { json: "duration", js: "duration", typ: r("AuthorClass") },
        { json: "comment", js: "comment", typ: r("AuthorClass") },
        { json: "lyrics", js: "lyrics", typ: r("AuthorClass") },
        { json: "playcount", js: "playcount", typ: r("AuthorClass") },
        { json: "musicbrainztrackid", js: "musicbrainztrackid", typ: r("AuthorClass") },
        { json: "musicbrainzartistid", js: "musicbrainzartistid", typ: r("AdditionalProperties") },
        { json: "albumid", js: "albumid", typ: r("AdditionalProperties") },
        { json: "lastplayed", js: "lastplayed", typ: r("AuthorClass") },
        { json: "disc", js: "disc", typ: r("AuthorClass") },
        { json: "albumartistid", js: "albumartistid", typ: r("AdditionalProperties") },
        { json: "albumreleasetype", js: "albumreleasetype", typ: r("AdditionalProperties") },
        { json: "mood", js: "mood", typ: r("AuthorClass") },
        { json: "contributors", js: "contributors", typ: r("AdditionalProperties") },
        { json: "displaycomposer", js: "displaycomposer", typ: r("AuthorClass") },
        { json: "displayconductor", js: "displayconductor", typ: r("AuthorClass") },
        { json: "displayorchestra", js: "displayorchestra", typ: r("AuthorClass") },
        { json: "displaylyricist", js: "displaylyricist", typ: r("AuthorClass") },
        { json: "genreid", js: "genreid", typ: r("AdditionalProperties") },
        { json: "sourceid", js: "sourceid", typ: r("AdditionalProperties") },
        { json: "disctitle", js: "disctitle", typ: r("AuthorClass") },
        { json: "bpm", js: "bpm", typ: r("AuthorClass") },
        { json: "samplerate", js: "samplerate", typ: r("AuthorClass") },
        { json: "bitrate", js: "bitrate", typ: r("AuthorClass") },
        { json: "channels", js: "channels", typ: r("AuthorClass") },
        { json: "songvideourl", js: "songvideourl", typ: r("AuthorClass") },
    ], false),
    "AudioFieldsAlbum": o([
        { json: "extends", js: "extends", typ: r("Extends") },
        { json: "items", js: "items", typ: r("AudioFieldsAlbumItems") },
    ], false),
    "AudioFieldsAlbumItems": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "description", js: "description", typ: "" },
        { json: "enum", js: "enum", typ: a("") },
    ], false),
    "AudioPropertyValue": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("AudioPropertyValueProperties") },
    ], false),
    "AudioPropertyValueProperties": o([
        { json: "missingartistid", js: "missingartistid", typ: r("AdditionalProperties") },
        { json: "librarylastupdated", js: "librarylastupdated", typ: r("AuthorClass") },
        { json: "librarylastcleaned", js: "librarylastcleaned", typ: r("AuthorClass") },
        { json: "artistlinksupdated", js: "artistlinksupdated", typ: r("AuthorClass") },
        { json: "songslastadded", js: "songslastadded", typ: r("AuthorClass") },
        { json: "albumslastadded", js: "albumslastadded", typ: r("AuthorClass") },
        { json: "artistslastadded", js: "artistslastadded", typ: r("AuthorClass") },
        { json: "genreslastadded", js: "genreslastadded", typ: r("AuthorClass") },
        { json: "songsmodified", js: "songsmodified", typ: r("AuthorClass") },
        { json: "albumsmodified", js: "albumsmodified", typ: r("AuthorClass") },
        { json: "artistsmodified", js: "artistsmodified", typ: r("AuthorClass") },
    ], false),
    "AudioLibraryClean": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("GetreferencesElement")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "GetreferencesProperties": o([
        { json: "id", js: "id", typ: r("Language") },
        { json: "type", js: "type", typ: r("Language") },
        { json: "getreferences", js: "getreferences", typ: r("GetreferencesElement") },
    ], false),
    "GetreferencesElement": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "default", js: "default", typ: u(undefined, true) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "properties", js: "properties", typ: u(undefined, r("GetreferencesProperties")) },
        { json: "$ref", js: "$ref", typ: u(undefined, r("ParamRef")) },
    ], false),
    "AudioLibraryExport": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryExportParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "AudioLibraryExportParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: a(r("FluffyType")) },
    ], false),
    "FluffyType": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "required", js: "required", typ: true },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("MagentaProperties") },
    ], false),
    "MagentaProperties": o([
        { json: "path", js: "path", typ: u(undefined, r("Path")) },
        { json: "overwrite", js: "overwrite", typ: u(undefined, r("GetreferencesElement")) },
        { json: "images", js: "images", typ: u(undefined, r("GetreferencesElement")) },
        { json: "actorthumbs", js: "actorthumbs", typ: u(undefined, r("GetreferencesElement")) },
    ], false),
    "Path": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "required", js: "required", typ: true },
        { json: "minLength", js: "minLength", typ: 0 },
        { json: "description", js: "description", typ: "" },
    ], false),
    "AudioLibraryGetAlbumDetails": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonsGetAddonDetailsParam")) },
        { json: "returns", js: "returns", typ: r("AudioLibraryGetAlbumDetailsReturns") },
    ], false),
    "AudioLibraryGetAlbumDetailsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("FriskyProperties") },
    ], false),
    "FriskyProperties": o([
        { json: "albumdetails", js: "albumdetails", typ: r("AdditionalProperties") },
    ], false),
    "AudioLibraryGetAlbums": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetAlbumsParam")) },
        { json: "returns", js: "returns", typ: r("AudioLibraryGetAlbumsReturns") },
    ], false),
    "AudioLibraryGetAlbumsParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, u(a(r("TentacledType")), r("ReturnsElement"))) },
        { json: "default", js: "default", typ: u(undefined, true) },
        { json: "description", js: "description", typ: u(undefined, "") },
    ], false),
    "TentacledType": o([
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "properties", js: "properties", typ: u(undefined, r("MischievousProperties")) },
        { json: "additionalProperties", js: "additionalProperties", typ: u(undefined, true) },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
    ], false),
    "MischievousProperties": o([
        { json: "genreid", js: "genreid", typ: u(undefined, r("SkinElement")) },
        { json: "genre", js: "genre", typ: u(undefined, r("Language")) },
        { json: "artistid", js: "artistid", typ: u(undefined, r("AlbumidElement")) },
        { json: "roleid", js: "roleid", typ: u(undefined, r("AlbumidElement")) },
        { json: "role", js: "role", typ: u(undefined, r("Language")) },
        { json: "artist", js: "artist", typ: u(undefined, r("Language")) },
        { json: "albumid", js: "albumid", typ: u(undefined, r("AlbumidElement")) },
        { json: "album", js: "album", typ: u(undefined, r("Language")) },
    ], false),
    "SkinElement": o([
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, u(a(r("StickyType")), r("ReturnsElement"))) },
        { json: "minLength", js: "minLength", typ: u(undefined, 0) },
        { json: "properties", js: "properties", typ: u(undefined, r("RoleidProperties")) },
    ], false),
    "RoleidProperties": o([
        { json: "file", js: "file", typ: r("FileElement") },
        { json: "root", js: "root", typ: r("FileElement") },
        { json: "failcount", js: "failcount", typ: r("LibraryID") },
    ], false),
    "StickyType": o([
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "enum", js: "enum", typ: u(undefined, a("")) },
        { json: "required", js: "required", typ: true },
        { json: "$ref", js: "$ref", typ: u(undefined, r("ParamRef")) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "properties", js: "properties", typ: u(undefined, r("BraggadociousProperties")) },
        { json: "additionalProperties", js: "additionalProperties", typ: u(undefined, true) },
    ], false),
    "BraggadociousProperties": o([
        { json: "percentage", js: "percentage", typ: u(undefined, r("RecordingidElement")) },
        { json: "time", js: "time", typ: u(undefined, r("RecordingidElement")) },
        { json: "step", js: "step", typ: u(undefined, r("LibraryID")) },
        { json: "seconds", js: "seconds", typ: u(undefined, r("LibraryID")) },
    ], false),
    "RecordingidElement": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "type", js: "type", typ: u(undefined, u(a(r("RecordingidElement")), r("ReturnsElement"))) },
        { json: "items", js: "items", typ: u(undefined, r("AdditionalProperties")) },
        { json: "properties", js: "properties", typ: u(undefined, r("RecordingidProperties")) },
        { json: "minLength", js: "minLength", typ: u(undefined, 0) },
    ], false),
    "RecordingidProperties": o([
        { json: "playlistid", js: "playlistid", typ: r("AlbumidElement") },
        { json: "item", js: "item", typ: r("AdditionalProperties") },
        { json: "position", js: "position", typ: r("AdditionalProperties") },
    ], false),
    "AudioLibraryGetAlbumsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties1") },
    ], false),
    "Properties1": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "albums", js: "albums", typ: r("SettingValueList") },
    ], false),
    "AudioLibraryGetArtistDetails": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonsGetAddonDetailsParam")) },
        { json: "returns", js: "returns", typ: r("AudioLibraryGetArtistDetailsReturns") },
    ], false),
    "AudioLibraryGetArtistDetailsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties2") },
    ], false),
    "Properties2": o([
        { json: "artistdetails", js: "artistdetails", typ: r("AdditionalProperties") },
    ], false),
    "AudioLibraryGetArtists": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetArtistsParam")) },
        { json: "returns", js: "returns", typ: r("AudioLibraryGetArtistsReturns") },
    ], false),
    "AudioLibraryGetArtistsParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, u(a(r("IndigoType")), r("ReturnsElement"))) },
        { json: "default", js: "default", typ: u(undefined, true) },
    ], false),
    "IndigoType": o([
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "properties", js: "properties", typ: u(undefined, r("Properties3")) },
        { json: "additionalProperties", js: "additionalProperties", typ: u(undefined, true) },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
    ], false),
    "Properties3": o([
        { json: "genreid", js: "genreid", typ: u(undefined, r("SkinElement")) },
        { json: "songgenreid", js: "songgenreid", typ: u(undefined, r("SkinElement")) },
        { json: "roleid", js: "roleid", typ: u(undefined, r("SkinElement")) },
        { json: "role", js: "role", typ: u(undefined, r("Language")) },
        { json: "genre", js: "genre", typ: u(undefined, r("Language")) },
        { json: "songgenre", js: "songgenre", typ: u(undefined, r("Language")) },
        { json: "albumid", js: "albumid", typ: u(undefined, r("AlbumidElement")) },
        { json: "album", js: "album", typ: u(undefined, r("Language")) },
        { json: "songid", js: "songid", typ: u(undefined, r("AlbumidElement")) },
    ], false),
    "AudioLibraryGetArtistsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties4") },
    ], false),
    "Properties4": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "artists", js: "artists", typ: r("SettingValueList") },
    ], false),
    "AudioLibraryGetAvailableArt": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetAvailableArtParam")) },
        { json: "returns", js: "returns", typ: r("AudioLibraryGetAvailableArtReturns") },
    ], false),
    "AudioLibraryGetAvailableArtParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "type", js: "type", typ: u(a(r("IndecentType")), r("ReturnsElement")) },
    ], false),
    "IndecentType": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties5") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "Properties5": o([
        { json: "albumid", js: "albumid", typ: u(undefined, r("AlbumidElement")) },
        { json: "artistid", js: "artistid", typ: u(undefined, r("AlbumidElement")) },
    ], false),
    "AudioLibraryGetAvailableArtReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties6") },
    ], false),
    "Properties6": o([
        { json: "availableart", js: "availableart", typ: r("Availableart") },
    ], false),
    "Availableart": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "required", js: "required", typ: true },
        { json: "items", js: "items", typ: r("AvailableartItems") },
    ], false),
    "AvailableartItems": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties7") },
    ], false),
    "Properties7": o([
        { json: "url", js: "url", typ: r("Language") },
        { json: "arttype", js: "arttype", typ: r("ReturnsValue") },
        { json: "previewurl", js: "previewurl", typ: r("DynpathClass") },
    ], false),
    "AudioLibraryGetAvailableArtTypes": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetAvailableArtTypesParam")) },
        { json: "returns", js: "returns", typ: r("AudioLibraryGetAvailableArtTypesReturns") },
    ], false),
    "AudioLibraryGetAvailableArtTypesParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "required", js: "required", typ: true },
        { json: "type", js: "type", typ: a(r("IndecentType")) },
    ], false),
    "AudioLibraryGetAvailableArtTypesReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties8") },
    ], false),
    "Properties8": o([
        { json: "availablearttypes", js: "availablearttypes", typ: r("Availablearttypes") },
    ], false),
    "Availablearttypes": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "required", js: "required", typ: true },
        { json: "items", js: "items", typ: u(undefined, r("AuthorClass")) },
    ], false),
    "AudioLibraryGetGenres": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetGenresParam")) },
        { json: "returns", js: "returns", typ: r("AudioLibraryGetGenresReturns") },
    ], false),
    "AudioLibraryGetGenresParam": o([
        { json: "name", js: "name", typ: r("PurpleName") },
        { json: "$ref", js: "$ref", typ: "" },
    ], false),
    "AudioLibraryGetGenresReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties9") },
    ], false),
    "Properties9": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "genres", js: "genres", typ: r("Genres") },
    ], false),
    "Genres": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "required", js: "required", typ: true },
        { json: "items", js: "items", typ: r("AdditionalProperties") },
    ], false),
    "AudioLibraryGetRecentlyEdAlbums": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetGenresParam")) },
        { json: "returns", js: "returns", typ: r("AudioLibraryGetAlbumsReturns") },
    ], false),
    "AudioLibraryGetRecentlyAddedSongs": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("RecordingidElement")) },
        { json: "returns", js: "returns", typ: r("AudioLibraryGetRecentlyAddedSongsReturns") },
    ], false),
    "AudioLibraryGetRecentlyAddedSongsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties10") },
    ], false),
    "Properties10": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "songs", js: "songs", typ: r("SettingValueList") },
    ], false),
    "AudioLibraryGetRecentlyPlayedSongs": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetGenresParam")) },
        { json: "returns", js: "returns", typ: r("AudioLibraryGetRecentlyAddedSongsReturns") },
    ], false),
    "AudioLibraryGetRoles": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetGenresParam")) },
        { json: "returns", js: "returns", typ: r("AudioLibraryGetRolesReturns") },
    ], false),
    "AudioLibraryGetRolesReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties11") },
    ], false),
    "Properties11": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "roles", js: "roles", typ: r("Groups") },
    ], false),
    "Groups": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "items", js: "items", typ: r("AdditionalProperties") },
        { json: "minItems", js: "minItems", typ: u(undefined, 0) },
        { json: "uniqueItems", js: "uniqueItems", typ: u(undefined, true) },
    ], false),
    "AudioLibraryGetSongDetails": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonsGetAddonDetailsParam")) },
        { json: "returns", js: "returns", typ: r("AudioLibraryGetSongDetailsReturns") },
    ], false),
    "AudioLibraryGetSongDetailsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties12") },
    ], false),
    "Properties12": o([
        { json: "songdetails", js: "songdetails", typ: r("AdditionalProperties") },
    ], false),
    "AudioLibraryGetSongs": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetAlbumsParam")) },
        { json: "returns", js: "returns", typ: r("AudioLibraryGetRecentlyAddedSongsReturns") },
    ], false),
    "AudioLibraryGetSources": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetGenresParam")) },
        { json: "returns", js: "returns", typ: r("AudioLibraryGetSourcesReturns") },
    ], false),
    "AudioLibraryGetSourcesReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties13") },
    ], false),
    "Properties13": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "sources", js: "sources", typ: r("Groups") },
    ], false),
    "AudioLibraryOnCleanFinished": o([
        { json: "type", js: "type", typ: r("ApplicationOnVolumeChangedType") },
        { json: "description", js: "description", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryOnCleanFinishedParam")) },
        { json: "returns", js: "returns", typ: null },
    ], false),
    "AudioLibraryOnCleanFinishedParam": o([
        { json: "name", js: "name", typ: r("FluffyName") },
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "required", js: "required", typ: true },
    ], false),
    "OLibraryOnRemove": o([
        { json: "type", js: "type", typ: r("ApplicationOnVolumeChangedType") },
        { json: "description", js: "description", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryOnRemoveParam")) },
        { json: "returns", js: "returns", typ: null },
    ], false),
    "AudioLibraryOnRemoveParam": o([
        { json: "name", js: "name", typ: r("FluffyName") },
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "required", js: "required", typ: true },
        { json: "properties", js: "properties", typ: u(undefined, r("Properties14")) },
    ], false),
    "Properties14": o([
        { json: "id", js: "id", typ: r("AlbumidElement") },
        { json: "type", js: "type", typ: r("AlbumidElement") },
        { json: "transaction", js: "transaction", typ: r("Sorttokens") },
    ], false),
    "AudioLibraryScan": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryScanParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "AudioLibraryScanParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "default", js: "default", typ: u(true, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "enum", js: "enum", typ: u(undefined, a("")) },
    ], false),
    "Details": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibrarySetAlbumDetailsParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "AudioLibrarySetAlbumDetailsParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "$ref", js: "$ref", typ: u(undefined, r("ParamRef")) },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "type", js: "type", typ: u(undefined, a(u(r("HilariousType"), r("ReturnsElement")))) },
        { json: "default", js: "default", typ: u(undefined, u(null, "")) },
        { json: "description", js: "description", typ: u(undefined, "") },
    ], false),
    "HilariousType": o([
        { json: "$ref", js: "$ref", typ: u(undefined, r("PurpleRef")) },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "enum", js: "enum", typ: u(undefined, a("")) },
        { json: "minimum", js: "minimum", typ: u(undefined, 0) },
        { json: "properties", js: "properties", typ: u(undefined, r("Properties15")) },
        { json: "additionalProperties", js: "additionalProperties", typ: u(undefined, true) },
    ], false),
    "Properties15": o([
        { json: "section", js: "section", typ: r("Language") },
        { json: "category", js: "category", typ: r("Language") },
    ], false),
    "Configuration": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "required", js: "required", typ: true },
        { json: "properties", js: "properties", typ: r("ConfigurationProperties") },
    ], false),
    "ConfigurationProperties": o([
        { json: "notifications", js: "notifications", typ: r("AlbumidElement") },
    ], false),
    "ConfigurationNotifications": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("ConfigurationNotificationsProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "ConfigurationNotificationsProperties": o([
        { json: "Player", js: "Player", typ: r("ReturnsValue") },
        { json: "Playlist", js: "Playlist", typ: r("ReturnsValue") },
        { json: "GUI", js: "GUI", typ: r("ReturnsValue") },
        { json: "System", js: "System", typ: r("ReturnsValue") },
        { json: "VideoLibrary", js: "VideoLibrary", typ: r("ReturnsValue") },
        { json: "AudioLibrary", js: "AudioLibrary", typ: r("ReturnsValue") },
        { json: "Application", js: "Application", typ: r("ReturnsValue") },
        { json: "Input", js: "Input", typ: r("ReturnsValue") },
        { json: "PVR", js: "PVR", typ: r("ReturnsValue") },
        { json: "Other", js: "Other", typ: r("ReturnsValue") },
    ], false),
    "FavouriteDetailsFavourite": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("FavouriteDetailsFavouriteProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "FavouriteDetailsFavouriteProperties": o([
        { json: "title", js: "title", typ: r("ReturnsValue") },
        { json: "type", js: "type", typ: r("AlbumidElement") },
        { json: "path", js: "path", typ: r("AuthorClass") },
        { json: "window", js: "window", typ: r("AuthorClass") },
        { json: "windowparameter", js: "windowparameter", typ: r("AuthorClass") },
        { json: "thumbnail", js: "thumbnail", typ: r("AuthorClass") },
    ], false),
    "FavouritesAddFavourite": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("FavouritesAddFavouriteParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "FavouritesAddFavouriteParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
    ], false),
    "FavouritesGetFavourites": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("FavouritesGetFavouritesParam")) },
        { json: "returns", js: "returns", typ: r("FavouritesGetFavouritesReturns") },
    ], false),
    "FavouritesGetFavouritesParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: u(undefined, a(u(r("AdditionalProperties"), r("ReturnsElement")))) },
        { json: "default", js: "default", typ: u(undefined, null) },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
    ], false),
    "FavouritesGetFavouritesReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties16") },
    ], false),
    "Properties16": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "favourites", js: "favourites", typ: r("SettingValueList") },
    ], false),
    "FilesDownload": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: a("") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonsGetAddonDetailsParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsValue") },
    ], false),
    "FilesGetDirectory": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonsGetAddonDetailsParam")) },
        { json: "returns", js: "returns", typ: r("FilesGetDirectoryReturns") },
    ], false),
    "FilesGetDirectoryReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties17") },
    ], false),
    "Properties17": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "files", js: "files", typ: r("Groups") },
    ], false),
    "FilesGetFileDetails": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonsGetAddonDetailsParam")) },
        { json: "returns", js: "returns", typ: r("FilesGetFileDetailsReturns") },
    ], false),
    "FilesGetFileDetailsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties18") },
    ], false),
    "Properties18": o([
        { json: "filedetails", js: "filedetails", typ: r("AlbumidElement") },
    ], false),
    "FilesGetSources": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonsGetAddonDetailsParam")) },
        { json: "returns", js: "returns", typ: r("FilesGetSourcesReturns") },
    ], false),
    "FilesGetSourcesReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties19") },
    ], false),
    "Properties19": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "sources", js: "sources", typ: r("AlbumidElement") },
    ], false),
    "FilesPrepareDownload": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: a("") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonsGetAddonDetailsParam")) },
        { json: "returns", js: "returns", typ: r("FilesPrepareDownloadReturns") },
    ], false),
    "FilesPrepareDownloadReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties20") },
    ], false),
    "Properties20": o([
        { json: "protocol", js: "protocol", typ: r("Language") },
        { json: "details", js: "details", typ: r("Language") },
        { json: "mode", js: "mode", typ: r("Language") },
    ], false),
    "FilesSetFileDetails": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("FilesSetFileDetailsParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "FilesSetFileDetailsParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: u(undefined, u(a(u(r("AlbumidElement"), r("ReturnsElement"))), r("ReturnsElement"))) },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "default", js: "default", typ: u(undefined, null) },
    ], false),
    "GUIActivateWindow": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("GUIActivateWindowParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "GUIActivateWindowParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "items", js: "items", typ: u(undefined, r("Language")) },
        { json: "minItems", js: "minItems", typ: u(undefined, 0) },
    ], false),
    "GUIGetStereoscopicModes": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a("any") },
        { json: "returns", js: "returns", typ: r("GUIGetStereoscopicModesReturns") },
    ], false),
    "GUIGetStereoscopicModesReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties21") },
    ], false),
    "Properties21": o([
        { json: "stereoscopicmodes", js: "stereoscopicmodes", typ: r("Weekdays") },
    ], false),
    "Weekdays": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "uniqueItems", js: "uniqueItems", typ: true },
        { json: "items", js: "items", typ: r("AdditionalProperties") },
        { json: "minItems", js: "minItems", typ: u(undefined, 0) },
    ], false),
    "GUIPropertyValue": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("GUIPropertyValueProperties") },
    ], false),
    "GUIPropertyValueProperties": o([
        { json: "currentwindow", js: "currentwindow", typ: r("Currentwindow") },
        { json: "currentcontrol", js: "currentcontrol", typ: r("ItemDetailsBase") },
        { json: "skin", js: "skin", typ: r("Skin") },
        { json: "fullscreen", js: "fullscreen", typ: r("AuthorClass") },
        { json: "stereoscopicmode", js: "stereoscopicmode", typ: r("AdditionalProperties") },
    ], false),
    "ItemDetailsBase": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("ItemDetailsBaseProperties") },
    ], false),
    "ItemDetailsBaseProperties": o([
        { json: "label", js: "label", typ: r("ReturnsValue") },
    ], false),
    "Currentwindow": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("CurrentwindowProperties") },
    ], false),
    "CurrentwindowProperties": o([
        { json: "id", js: "id", typ: r("ReturnsValue") },
        { json: "label", js: "label", typ: r("ReturnsValue") },
    ], false),
    "Skin": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties22") },
    ], false),
    "Properties22": o([
        { json: "id", js: "id", typ: r("Language") },
        { json: "name", js: "name", typ: r("AuthorClass") },
    ], false),
    "GUIShowNotification": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("GUIShowNotificationParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "GUIShowNotificationParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: u(a(r("Filetype")), r("ReturnsElement")) },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "default", js: "default", typ: u(undefined, u(0, "")) },
        { json: "minimum", js: "minimum", typ: u(undefined, 0) },
        { json: "description", js: "description", typ: u(undefined, "") },
    ], false),
    "GUIStereoscopyMode": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("GUIStereoscopyModeProperties") },
    ], false),
    "GUIStereoscopyModeProperties": o([
        { json: "mode", js: "mode", typ: r("Language") },
        { json: "label", js: "label", typ: r("ReturnsValue") },
    ], false),
    "Time": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "description", js: "description", typ: "" },
        { json: "properties", js: "properties", typ: r("GlobalTimeProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "GlobalTimeProperties": o([
        { json: "hours", js: "hours", typ: r("LibraryID") },
        { json: "minutes", js: "minutes", typ: r("LibraryID") },
        { json: "seconds", js: "seconds", typ: r("LibraryID") },
        { json: "milliseconds", js: "milliseconds", typ: r("LibraryID") },
    ], false),
    "GlobalToggle": o([
        { json: "type", js: "type", typ: a(r("Language")) },
    ], false),
    "InputButtonEvent": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: r("Permission") },
        { json: "params", js: "params", typ: a(r("InputButtonEventParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "InputButtonEventParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "required", js: "required", typ: true },
        { json: "description", js: "description", typ: "" },
        { json: "enum", js: "enum", typ: u(undefined, a("")) },
        { json: "minimum", js: "minimum", typ: u(undefined, 0) },
        { json: "default", js: "default", typ: u(undefined, 0) },
    ], false),
    "InputExecuteAction": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: r("Permission") },
        { json: "params", js: "params", typ: a(r("InputExecuteActionParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "InputExecuteActionParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "$ref", js: "$ref", typ: r("ParamRef") },
        { json: "required", js: "required", typ: true },
    ], false),
    "ItemCustomProperties": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "additionalProperties", js: "additionalProperties", typ: r("AdditionalProperties") },
    ], false),
    "ItemFieldsBase": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "uniqueItems", js: "uniqueItems", typ: true },
        { json: "items", js: "items", typ: r("AuthorClass") },
    ], false),
    "JsonrpcGetConfiguration": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: "" },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("JSONRPCGetConfigurationParam")) },
        { json: "returns", js: "returns", typ: r("AdditionalProperties") },
    ], false),
    "JSONRPCGetConfigurationParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: u(undefined, u(a(r("AmbitiousType")), r("ReturnsElement"))) },
        { json: "properties", js: "properties", typ: u(undefined, r("Properties23")) },
        { json: "$ref", js: "$ref", typ: u(undefined, r("ParamRef")) },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "default", js: "default", typ: u(undefined, "") },
    ], false),
    "Properties23": o([
        { json: "Player", js: "Player", typ: r("AdditionalProperties") },
        { json: "Playlist", js: "Playlist", typ: r("AdditionalProperties") },
        { json: "GUI", js: "GUI", typ: r("AdditionalProperties") },
        { json: "System", js: "System", typ: r("AdditionalProperties") },
        { json: "AudioLibrary", js: "AudioLibrary", typ: r("AdditionalProperties") },
        { json: "VideoLibrary", js: "VideoLibrary", typ: r("AdditionalProperties") },
        { json: "Application", js: "Application", typ: r("AdditionalProperties") },
        { json: "Input", js: "Input", typ: r("AdditionalProperties") },
        { json: "Other", js: "Other", typ: r("AdditionalProperties") },
    ], false),
    "AmbitiousType": o([
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "required", js: "required", typ: true },
        { json: "enum", js: "enum", typ: u(undefined, a(0)) },
        { json: "$ref", js: "$ref", typ: u(undefined, r("PurpleRef")) },
    ], false),
    "JsonrpcNotifyAll": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("FileElement")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "JSONRPCPermission": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a("any") },
        { json: "returns", js: "returns", typ: r("JSONRPCPermissionReturns") },
    ], false),
    "JSONRPCPermissionReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: m(r("ReturnsValue")) },
    ], false),
    "JSONRPCVersion": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a("any") },
        { json: "returns", js: "returns", typ: r("JSONRPCVersionReturns") },
    ], false),
    "JSONRPCVersionReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties24") },
    ], false),
    "Properties24": o([
        { json: "version", js: "version", typ: r("FluffyVersion") },
    ], false),
    "FluffyVersion": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "required", js: "required", typ: true },
        { json: "properties", js: "properties", typ: r("Properties25") },
    ], false),
    "Properties25": o([
        { json: "major", js: "major", typ: r("LibraryID") },
        { json: "minor", js: "minor", typ: r("LibraryID") },
        { json: "patch", js: "patch", typ: r("LibraryID") },
    ], false),
    "LibraryDetailsGenre": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("LibraryDetailsGenreProperties") },
    ], false),
    "LibraryDetailsGenreProperties": o([
        { json: "genreid", js: "genreid", typ: r("AlbumidElement") },
        { json: "title", js: "title", typ: r("AuthorClass") },
        { json: "thumbnail", js: "thumbnail", typ: r("AuthorClass") },
        { json: "sourceid", js: "sourceid", typ: r("Sorttokens") },
    ], false),
    "LibraryDetailsSource": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("LibraryDetailsSourceProperties") },
    ], false),
    "LibraryDetailsSourceProperties": o([
        { json: "sourceid", js: "sourceid", typ: r("AlbumidElement") },
        { json: "file", js: "file", typ: r("Language") },
        { json: "paths", js: "paths", typ: r("Sorttokens") },
    ], false),
    "LibraryDetailsTag": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("LibraryDetailsTagProperties") },
    ], false),
    "LibraryDetailsTagProperties": o([
        { json: "tagid", js: "tagid", typ: r("AlbumidElement") },
        { json: "title", js: "title", typ: r("AuthorClass") },
    ], false),
    "ListFilter": o([
        { json: "type", js: "type", typ: a(r("ListFilterAlbumsType")) },
    ], false),
    "ListFilterAlbumsType": o([
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "properties", js: "properties", typ: u(undefined, r("Properties26")) },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
    ], false),
    "Properties26": o([
        { json: "and", js: "and", typ: u(undefined, r("Groups")) },
        { json: "or", js: "or", typ: u(undefined, r("Groups")) },
    ], false),
    "ListFilterRule": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("ListFilterRuleProperties") },
    ], false),
    "ListFilterRuleProperties": o([
        { json: "operator", js: "operator", typ: r("AlbumidElement") },
        { json: "value", js: "value", typ: r("PurpleValue") },
    ], false),
    "PurpleValue": o([
        { json: "type", js: "type", typ: a(r("Availablearttypes")) },
        { json: "required", js: "required", typ: true },
    ], false),
    "ListFilterRuleAlbumsClass": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("ListFilterRuleAlbumsProperties") },
    ], false),
    "ListFilterRuleAlbumsProperties": o([
        { json: "field", js: "field", typ: r("AlbumidElement") },
    ], false),
    "ListItemAll": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("ListItemAllProperties") },
    ], false),
    "ListItemAllProperties": o([
        { json: "channel", js: "channel", typ: r("AuthorClass") },
        { json: "channeltype", js: "channeltype", typ: r("AdditionalProperties") },
        { json: "hidden", js: "hidden", typ: r("AuthorClass") },
        { json: "locked", js: "locked", typ: r("AuthorClass") },
        { json: "channelnumber", js: "channelnumber", typ: r("AuthorClass") },
        { json: "subchannelnumber", js: "subchannelnumber", typ: r("AuthorClass") },
        { json: "starttime", js: "starttime", typ: r("AuthorClass") },
        { json: "endtime", js: "endtime", typ: r("AuthorClass") },
    ], false),
    "ListItemBase": o([
        { json: "extends", js: "extends", typ: a("") },
        { json: "properties", js: "properties", typ: r("ListItemBaseProperties") },
    ], false),
    "ListItemBaseProperties": o([
        { json: "id", js: "id", typ: r("AdditionalProperties") },
        { json: "type", js: "type", typ: r("ApplicationPropertyName") },
        { json: "albumartist", js: "albumartist", typ: r("AdditionalProperties") },
        { json: "album", js: "album", typ: r("AuthorClass") },
        { json: "track", js: "track", typ: r("AuthorClass") },
        { json: "duration", js: "duration", typ: r("AuthorClass") },
        { json: "comment", js: "comment", typ: r("AuthorClass") },
        { json: "lyrics", js: "lyrics", typ: r("AuthorClass") },
        { json: "musicbrainztrackid", js: "musicbrainztrackid", typ: r("AuthorClass") },
        { json: "musicbrainzartistid", js: "musicbrainzartistid", typ: r("AdditionalProperties") },
        { json: "trailer", js: "trailer", typ: r("AuthorClass") },
        { json: "tagline", js: "tagline", typ: r("AuthorClass") },
        { json: "plotoutline", js: "plotoutline", typ: r("AuthorClass") },
        { json: "originaltitle", js: "originaltitle", typ: r("AuthorClass") },
        { json: "writer", js: "writer", typ: r("AdditionalProperties") },
        { json: "studio", js: "studio", typ: r("AdditionalProperties") },
        { json: "mpaa", js: "mpaa", typ: r("AuthorClass") },
        { json: "cast", js: "cast", typ: r("AdditionalProperties") },
        { json: "country", js: "country", typ: r("AdditionalProperties") },
        { json: "imdbnumber", js: "imdbnumber", typ: r("AuthorClass") },
        { json: "premiered", js: "premiered", typ: r("AuthorClass") },
        { json: "productioncode", js: "productioncode", typ: r("AuthorClass") },
        { json: "set", js: "set", typ: r("AuthorClass") },
        { json: "showlink", js: "showlink", typ: r("AdditionalProperties") },
        { json: "top250", js: "top250", typ: r("AuthorClass") },
        { json: "votes", js: "votes", typ: r("AuthorClass") },
        { json: "firstaired", js: "firstaired", typ: r("AuthorClass") },
        { json: "season", js: "season", typ: r("AuthorClass") },
        { json: "episode", js: "episode", typ: r("AuthorClass") },
        { json: "showtitle", js: "showtitle", typ: r("AuthorClass") },
        { json: "albumid", js: "albumid", typ: r("AdditionalProperties") },
        { json: "setid", js: "setid", typ: r("AdditionalProperties") },
        { json: "tvshowid", js: "tvshowid", typ: r("AdditionalProperties") },
        { json: "watchedepisodes", js: "watchedepisodes", typ: r("AuthorClass") },
        { json: "disc", js: "disc", typ: r("AuthorClass") },
        { json: "tag", js: "tag", typ: r("AdditionalProperties") },
        { json: "albumartistid", js: "albumartistid", typ: r("AdditionalProperties") },
        { json: "uniqueid", js: "uniqueid", typ: r("AdditionalProperties") },
        { json: "episodeguide", js: "episodeguide", typ: r("AuthorClass") },
        { json: "sorttitle", js: "sorttitle", typ: r("AuthorClass") },
        { json: "description", js: "description", typ: r("AuthorClass") },
        { json: "theme", js: "theme", typ: r("AdditionalProperties") },
        { json: "mood", js: "mood", typ: r("AdditionalProperties") },
        { json: "style", js: "style", typ: r("AdditionalProperties") },
        { json: "albumlabel", js: "albumlabel", typ: r("AuthorClass") },
        { json: "specialsortseason", js: "specialsortseason", typ: r("AuthorClass") },
        { json: "specialsortepisode", js: "specialsortepisode", typ: r("AuthorClass") },
        { json: "compilation", js: "compilation", typ: r("AuthorClass") },
        { json: "releasetype", js: "releasetype", typ: r("AdditionalProperties") },
        { json: "albumreleasetype", js: "albumreleasetype", typ: r("AdditionalProperties") },
        { json: "contributors", js: "contributors", typ: r("AdditionalProperties") },
        { json: "displaycomposer", js: "displaycomposer", typ: r("AuthorClass") },
        { json: "displayconductor", js: "displayconductor", typ: r("AuthorClass") },
        { json: "displayorchestra", js: "displayorchestra", typ: r("AuthorClass") },
        { json: "displaylyricist", js: "displaylyricist", typ: r("AuthorClass") },
        { json: "mediapath", js: "mediapath", typ: r("DynpathClass") },
        { json: "dynpath", js: "dynpath", typ: r("DynpathClass") },
        { json: "isboxset", js: "isboxset", typ: r("AuthorClass") },
        { json: "totaldiscs", js: "totaldiscs", typ: r("AuthorClass") },
        { json: "disctitle", js: "disctitle", typ: r("AuthorClass") },
        { json: "releasedate", js: "releasedate", typ: r("AuthorClass") },
        { json: "originaldate", js: "originaldate", typ: r("AuthorClass") },
        { json: "bpm", js: "bpm", typ: r("AuthorClass") },
        { json: "bitrate", js: "bitrate", typ: r("AuthorClass") },
        { json: "samplerate", js: "samplerate", typ: r("AuthorClass") },
        { json: "channels", js: "channels", typ: r("AuthorClass") },
        { json: "albumstatus", js: "albumstatus", typ: r("AuthorClass") },
        { json: "customproperties", js: "customproperties", typ: r("AdditionalProperties") },
        { json: "songvideourl", js: "songvideourl", typ: r("AuthorClass") },
    ], false),
    "ListItemFile": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("ListItemFileProperties") },
    ], false),
    "ListItemFileProperties": o([
        { json: "file", js: "file", typ: r("ReturnsValue") },
        { json: "filetype", js: "filetype", typ: r("Filetype") },
        { json: "size", js: "size", typ: r("DynpathClass") },
        { json: "lastmodified", js: "lastmodified", typ: r("AuthorClass") },
        { json: "mimetype", js: "mimetype", typ: r("AuthorClass") },
    ], false),
    "ListItemsSources": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "items", js: "items", typ: r("ListItemsSourcesItems") },
    ], false),
    "ListItemsSourcesItems": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("Properties27") },
    ], false),
    "Properties27": o([
        { json: "file", js: "file", typ: r("ReturnsValue") },
    ], false),
    "ListLimits": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("ListLimitsProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "ListLimitsProperties": o([
        { json: "start", js: "start", typ: r("LibraryID") },
        { json: "end", js: "end", typ: r("Sorttokens") },
    ], false),
    "ListLimitsReturned": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("ListLimitsReturnedProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "ListLimitsReturnedProperties": o([
        { json: "start", js: "start", typ: r("LibraryID") },
        { json: "end", js: "end", typ: r("AdditionalProperties") },
        { json: "total", js: "total", typ: r("LibraryID") },
    ], false),
    "ListSort": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("ListSortProperties") },
    ], false),
    "ListSortProperties": o([
        { json: "method", js: "method", typ: r("AddonContent") },
        { json: "order", js: "order", typ: r("AddonContent") },
        { json: "ignorearticle", js: "ignorearticle", typ: r("Ignorearticle") },
        { json: "useartistsortname", js: "useartistsortname", typ: r("Ignorearticle") },
    ], false),
    "Ignorearticle": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "default", js: "default", typ: true },
    ], false),
    "MediaArtwork": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("MediaArtworkProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: r("AdditionalProperties") },
    ], false),
    "MediaArtworkProperties": o([
        { json: "thumb", js: "thumb", typ: r("AdditionalProperties") },
        { json: "poster", js: "poster", typ: r("AdditionalProperties") },
        { json: "banner", js: "banner", typ: r("AdditionalProperties") },
        { json: "fanart", js: "fanart", typ: r("AdditionalProperties") },
    ], false),
    "MediaArtworkSet": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("MediaArtworkSetProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: r("MediaArtworkSetAdditionalProperties") },
    ], false),
    "MediaArtworkSetAdditionalProperties": o([
        { json: "type", js: "type", typ: a(u(r("AlbumidElement"), r("ReturnsElement"))) },
    ], false),
    "MediaArtworkSetProperties": o([
        { json: "thumb", js: "thumb", typ: r("Banner") },
        { json: "poster", js: "poster", typ: r("Banner") },
        { json: "banner", js: "banner", typ: r("Banner") },
        { json: "fanart", js: "fanart", typ: r("Banner") },
    ], false),
    "Banner": o([
        { json: "type", js: "type", typ: a(u(r("AlbumidElement"), r("ReturnsElement"))) },
        { json: "default", js: "default", typ: u(null, "") },
    ], false),
    "MediaDetailsBase": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("MediaDetailsBaseProperties") },
    ], false),
    "MediaDetailsBaseProperties": o([
        { json: "fanart", js: "fanart", typ: r("AuthorClass") },
        { json: "thumbnail", js: "thumbnail", typ: r("AuthorClass") },
    ], false),
    "Set": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "additionalProperties", js: "additionalProperties", typ: r("MediaArtworkSetAdditionalProperties") },
    ], false),
    "NotificationsItem": o([
        { json: "type", js: "type", typ: a(r("NotificationsItemType")) },
    ], false),
    "NotificationsItemType": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "description", js: "description", typ: "" },
        { json: "properties", js: "properties", typ: r("Properties28") },
    ], false),
    "Properties28": o([
        { json: "type", js: "type", typ: r("AlbumidElement") },
        { json: "id", js: "id", typ: u(undefined, r("AlbumidElement")) },
        { json: "title", js: "title", typ: u(undefined, r("ReturnsValue")) },
        { json: "year", js: "year", typ: u(undefined, r("AuthorClass")) },
        { json: "episode", js: "episode", typ: u(undefined, r("AuthorClass")) },
        { json: "season", js: "season", typ: u(undefined, r("AuthorClass")) },
        { json: "showtitle", js: "showtitle", typ: u(undefined, r("AuthorClass")) },
        { json: "album", js: "album", typ: u(undefined, r("AuthorClass")) },
        { json: "artist", js: "artist", typ: u(undefined, r("AuthorClass")) },
        { json: "track", js: "track", typ: u(undefined, r("AuthorClass")) },
        { json: "file", js: "file", typ: u(undefined, r("ReturnsValue")) },
        { json: "channeltype", js: "channeltype", typ: u(undefined, r("AlbumidElement")) },
    ], false),
    "Optional": o([
        { json: "type", js: "type", typ: a(r("ReturnsElement")) },
        { json: "default", js: "default", typ: null },
    ], false),
    "PVRChannelGroupID": o([
        { json: "type", js: "type", typ: a(r("Filetype")) },
    ], false),
    "PVRDeleteTimer": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("PVRDeleteTimerParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "PVRDeleteTimerParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "$ref", js: "$ref", typ: r("ParamRef") },
        { json: "required", js: "required", typ: true },
        { json: "description", js: "description", typ: "" },
    ], false),
    "PVRDetailsBroadcast": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("PVRDetailsBroadcastProperties") },
    ], false),
    "PVRDetailsBroadcastProperties": o([
        { json: "broadcastid", js: "broadcastid", typ: r("AlbumidElement") },
        { json: "title", js: "title", typ: r("AuthorClass") },
        { json: "plot", js: "plot", typ: r("AuthorClass") },
        { json: "plotoutline", js: "plotoutline", typ: r("AuthorClass") },
        { json: "starttime", js: "starttime", typ: r("AuthorClass") },
        { json: "endtime", js: "endtime", typ: r("AuthorClass") },
        { json: "runtime", js: "runtime", typ: r("AuthorClass") },
        { json: "progress", js: "progress", typ: r("AuthorClass") },
        { json: "progresspercentage", js: "progresspercentage", typ: r("AuthorClass") },
        { json: "genre", js: "genre", typ: r("AuthorClass") },
        { json: "episodename", js: "episodename", typ: r("AuthorClass") },
        { json: "episodenum", js: "episodenum", typ: r("AuthorClass") },
        { json: "episodepart", js: "episodepart", typ: r("AuthorClass") },
        { json: "firstaired", js: "firstaired", typ: r("AuthorClass") },
        { json: "hastimer", js: "hastimer", typ: r("AuthorClass") },
        { json: "isactive", js: "isactive", typ: r("AuthorClass") },
        { json: "parentalrating", js: "parentalrating", typ: r("AuthorClass") },
        { json: "wasactive", js: "wasactive", typ: r("AuthorClass") },
        { json: "thumbnail", js: "thumbnail", typ: r("AuthorClass") },
        { json: "rating", js: "rating", typ: r("AuthorClass") },
        { json: "originaltitle", js: "originaltitle", typ: r("AuthorClass") },
        { json: "cast", js: "cast", typ: r("AuthorClass") },
        { json: "director", js: "director", typ: r("AuthorClass") },
        { json: "writer", js: "writer", typ: r("AuthorClass") },
        { json: "year", js: "year", typ: r("AuthorClass") },
        { json: "imdbnumber", js: "imdbnumber", typ: r("AuthorClass") },
        { json: "hastimerrule", js: "hastimerrule", typ: r("AuthorClass") },
        { json: "hasrecording", js: "hasrecording", typ: r("AuthorClass") },
        { json: "recording", js: "recording", typ: r("AuthorClass") },
        { json: "isseries", js: "isseries", typ: r("AuthorClass") },
        { json: "isplayable", js: "isplayable", typ: r("DynpathClass") },
        { json: "clientid", js: "clientid", typ: r("AdditionalProperties") },
        { json: "hasreminder", js: "hasreminder", typ: r("AuthorClass") },
        { json: "seasonnum", js: "seasonnum", typ: r("AuthorClass") },
    ], false),
    "PVRDetailsChannel": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("PVRDetailsChannelProperties") },
    ], false),
    "PVRDetailsChannelProperties": o([
        { json: "channelid", js: "channelid", typ: r("AlbumidElement") },
        { json: "channel", js: "channel", typ: r("AuthorClass") },
        { json: "channeltype", js: "channeltype", typ: r("AdditionalProperties") },
        { json: "hidden", js: "hidden", typ: r("AuthorClass") },
        { json: "locked", js: "locked", typ: r("AuthorClass") },
        { json: "thumbnail", js: "thumbnail", typ: r("AuthorClass") },
        { json: "lastplayed", js: "lastplayed", typ: r("AuthorClass") },
        { json: "broadcastnow", js: "broadcastnow", typ: r("AdditionalProperties") },
        { json: "broadcastnext", js: "broadcastnext", typ: r("AdditionalProperties") },
        { json: "uniqueid", js: "uniqueid", typ: r("ReturnsValue") },
        { json: "icon", js: "icon", typ: r("AuthorClass") },
        { json: "channelnumber", js: "channelnumber", typ: r("AuthorClass") },
        { json: "subchannelnumber", js: "subchannelnumber", typ: r("AuthorClass") },
        { json: "isrecording", js: "isrecording", typ: r("AuthorClass") },
        { json: "hasarchive", js: "hasarchive", typ: r("AuthorClass") },
        { json: "clientid", js: "clientid", typ: r("AdditionalProperties") },
    ], false),
    "PVRDetailsChannelGroup": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("PVRDetailsChannelGroupProperties") },
    ], false),
    "PVRDetailsChannelGroupProperties": o([
        { json: "channelgroupid", js: "channelgroupid", typ: r("AlbumidElement") },
        { json: "channeltype", js: "channeltype", typ: r("AlbumidElement") },
    ], false),
    "PVRDetailsChannelGroupExtended": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("PVRDetailsChannelGroupExtendedProperties") },
    ], false),
    "PVRDetailsChannelGroupExtendedProperties": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "channels", js: "channels", typ: r("SettingValueList") },
    ], false),
    "PVRDetailsClient": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("PVRDetailsClientProperties") },
    ], false),
    "PVRDetailsClientProperties": o([
        { json: "clientid", js: "clientid", typ: r("AlbumidElement") },
        { json: "addonid", js: "addonid", typ: r("AuthorClass") },
        { json: "supportstv", js: "supportstv", typ: r("AuthorClass") },
        { json: "supportsradio", js: "supportsradio", typ: r("AuthorClass") },
        { json: "supportsepg", js: "supportsepg", typ: r("AuthorClass") },
        { json: "supportsrecordings", js: "supportsrecordings", typ: r("AuthorClass") },
        { json: "supportstimers", js: "supportstimers", typ: r("AuthorClass") },
        { json: "supportschannelgroups", js: "supportschannelgroups", typ: r("AuthorClass") },
        { json: "supportschannelscan", js: "supportschannelscan", typ: r("AuthorClass") },
    ], false),
    "PVRDetailsRecording": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("PVRDetailsRecordingProperties") },
    ], false),
    "PVRDetailsRecordingProperties": o([
        { json: "recordingid", js: "recordingid", typ: r("AlbumidElement") },
        { json: "title", js: "title", typ: r("AuthorClass") },
        { json: "plot", js: "plot", typ: r("AuthorClass") },
        { json: "plotoutline", js: "plotoutline", typ: r("AuthorClass") },
        { json: "genre", js: "genre", typ: r("AuthorClass") },
        { json: "playcount", js: "playcount", typ: r("AuthorClass") },
        { json: "resume", js: "resume", typ: r("AdditionalProperties") },
        { json: "channel", js: "channel", typ: r("AuthorClass") },
        { json: "starttime", js: "starttime", typ: r("AuthorClass") },
        { json: "endtime", js: "endtime", typ: r("AuthorClass") },
        { json: "runtime", js: "runtime", typ: r("AuthorClass") },
        { json: "lifetime", js: "lifetime", typ: r("AuthorClass") },
        { json: "icon", js: "icon", typ: r("AuthorClass") },
        { json: "art", js: "art", typ: r("AdditionalProperties") },
        { json: "streamurl", js: "streamurl", typ: r("AuthorClass") },
        { json: "file", js: "file", typ: r("AuthorClass") },
        { json: "directory", js: "directory", typ: r("AuthorClass") },
        { json: "radio", js: "radio", typ: r("AuthorClass") },
        { json: "isdeleted", js: "isdeleted", typ: r("AuthorClass") },
        { json: "epgeventid", js: "epgeventid", typ: r("AuthorClass") },
        { json: "channeluid", js: "channeluid", typ: r("AuthorClass") },
        { json: "season", js: "season", typ: r("AuthorClass") },
        { json: "episode", js: "episode", typ: r("AuthorClass") },
        { json: "showtitle", js: "showtitle", typ: r("AuthorClass") },
        { json: "clientid", js: "clientid", typ: r("AdditionalProperties") },
    ], false),
    "PVRDetailsTimer": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("PVRDetailsTimerProperties") },
    ], false),
    "PVRDetailsTimerProperties": o([
        { json: "timerid", js: "timerid", typ: r("AlbumidElement") },
        { json: "title", js: "title", typ: r("AuthorClass") },
        { json: "summary", js: "summary", typ: r("AuthorClass") },
        { json: "channelid", js: "channelid", typ: r("AdditionalProperties") },
        { json: "isradio", js: "isradio", typ: r("AuthorClass") },
        { json: "istimerrule", js: "istimerrule", typ: r("AuthorClass") },
        { json: "ismanual", js: "ismanual", typ: r("AuthorClass") },
        { json: "starttime", js: "starttime", typ: r("AuthorClass") },
        { json: "endtime", js: "endtime", typ: r("AuthorClass") },
        { json: "runtime", js: "runtime", typ: r("AuthorClass") },
        { json: "lifetime", js: "lifetime", typ: r("AuthorClass") },
        { json: "firstday", js: "firstday", typ: r("AuthorClass") },
        { json: "weekdays", js: "weekdays", typ: r("Weekdays") },
        { json: "priority", js: "priority", typ: r("AuthorClass") },
        { json: "startmargin", js: "startmargin", typ: r("AuthorClass") },
        { json: "endmargin", js: "endmargin", typ: r("AuthorClass") },
        { json: "state", js: "state", typ: r("AdditionalProperties") },
        { json: "file", js: "file", typ: r("AuthorClass") },
        { json: "directory", js: "directory", typ: r("AuthorClass") },
        { json: "preventduplicateepisodes", js: "preventduplicateepisodes", typ: r("AuthorClass") },
        { json: "startanytime", js: "startanytime", typ: r("AuthorClass") },
        { json: "endanytime", js: "endanytime", typ: r("AuthorClass") },
        { json: "epgsearchstring", js: "epgsearchstring", typ: r("AuthorClass") },
        { json: "fulltextepgsearch", js: "fulltextepgsearch", typ: r("AuthorClass") },
        { json: "recordinggroup", js: "recordinggroup", typ: r("AuthorClass") },
        { json: "maxrecordings", js: "maxrecordings", typ: r("AuthorClass") },
        { json: "epguid", js: "epguid", typ: r("AuthorClass") },
        { json: "isreadonly", js: "isreadonly", typ: r("AuthorClass") },
        { json: "isreminder", js: "isreminder", typ: r("AuthorClass") },
        { json: "clientid", js: "clientid", typ: r("AdditionalProperties") },
        { json: "broadcastid", js: "broadcastid", typ: r("AdditionalProperties") },
    ], false),
    "PVRGetBroadcastDetails": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonsGetAddonDetailsParam")) },
        { json: "returns", js: "returns", typ: r("PVRGetBroadcastDetailsReturns") },
    ], false),
    "PVRGetBroadcastDetailsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties29") },
    ], false),
    "Properties29": o([
        { json: "broadcastdetails", js: "broadcastdetails", typ: r("AdditionalProperties") },
    ], false),
    "PVRGetBroadcasts": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("SkinElement")) },
        { json: "returns", js: "returns", typ: r("PVRGetBroadcastsReturns") },
    ], false),
    "PVRGetBroadcastsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties30") },
    ], false),
    "Properties30": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "broadcasts", js: "broadcasts", typ: r("Groups") },
    ], false),
    "PVRGetChannelDetails": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonsGetAddonDetailsParam")) },
        { json: "returns", js: "returns", typ: r("PVRGetChannelDetailsReturns") },
    ], false),
    "PVRGetChannelDetailsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties31") },
    ], false),
    "Properties31": o([
        { json: "channeldetails", js: "channeldetails", typ: r("AdditionalProperties") },
    ], false),
    "PVRGetChannelGroupDetails": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonsGetAddonDetailsParam")) },
        { json: "returns", js: "returns", typ: r("PVRGetChannelGroupDetailsReturns") },
    ], false),
    "PVRGetChannelGroupDetailsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties32") },
    ], false),
    "Properties32": o([
        { json: "channelgroupdetails", js: "channelgroupdetails", typ: r("AdditionalProperties") },
    ], false),
    "PVRGetChannelGroups": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("RecordingidElement")) },
        { json: "returns", js: "returns", typ: r("PVRGetChannelGroupsReturns") },
    ], false),
    "PVRGetChannelGroupsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties33") },
    ], false),
    "Properties33": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "channelgroups", js: "channelgroups", typ: r("Groups") },
    ], false),
    "PVRGetChannels": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("SkinElement")) },
        { json: "returns", js: "returns", typ: r("PVRGetChannelsReturns") },
    ], false),
    "PVRGetChannelsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties34") },
    ], false),
    "Properties34": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "channels", js: "channels", typ: r("Groups") },
    ], false),
    "PVRGetClients": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetGenresParam")) },
        { json: "returns", js: "returns", typ: r("PVRGetClientsReturns") },
    ], false),
    "PVRGetClientsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties35") },
    ], false),
    "Properties35": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "clients", js: "clients", typ: r("Groups") },
    ], false),
    "PVRGetRecordingDetails": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonsGetAddonDetailsParam")) },
        { json: "returns", js: "returns", typ: r("PVRGetRecordingDetailsReturns") },
    ], false),
    "PVRGetRecordingDetailsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties36") },
    ], false),
    "Properties36": o([
        { json: "recordingdetails", js: "recordingdetails", typ: r("AdditionalProperties") },
    ], false),
    "PVRGetRecordings": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetGenresParam")) },
        { json: "returns", js: "returns", typ: r("PVRGetRecordingsReturns") },
    ], false),
    "PVRGetRecordingsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties37") },
    ], false),
    "Properties37": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "recordings", js: "recordings", typ: r("Groups") },
    ], false),
    "PVRGetTimerDetails": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("RecordingidElement")) },
        { json: "returns", js: "returns", typ: r("PVRGetTimerDetailsReturns") },
    ], false),
    "PVRGetTimerDetailsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties38") },
    ], false),
    "Properties38": o([
        { json: "timerdetails", js: "timerdetails", typ: r("AdditionalProperties") },
    ], false),
    "PVRGetTimers": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetGenresParam")) },
        { json: "returns", js: "returns", typ: r("PVRGetTimersReturns") },
    ], false),
    "PVRGetTimersReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties39") },
    ], false),
    "Properties39": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "timers", js: "timers", typ: r("Groups") },
    ], false),
    "PVRPropertyValue": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("PVRPropertyValueProperties") },
    ], false),
    "PVRPropertyValueProperties": o([
        { json: "available", js: "available", typ: r("AuthorClass") },
        { json: "recording", js: "recording", typ: r("AuthorClass") },
        { json: "scanning", js: "scanning", typ: r("AuthorClass") },
    ], false),
    "PVRRecord": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("PVRRecordParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "PVRRecordParam": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "default", js: "default", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, a(r("CunningType"))) },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "description", js: "description", typ: u(undefined, "") },
    ], false),
    "CunningType": o([
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "enum", js: "enum", typ: u(undefined, a(u(0, ""))) },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "minimum", js: "minimum", typ: u(undefined, 0) },
        { json: "description", js: "description", typ: u(undefined, "") },
    ], false),
    "PVRScan": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("SkinElement")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "PlayerAudioStream": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("PlayerAudioStreamProperties") },
    ], false),
    "PlayerAudioStreamProperties": o([
        { json: "index", js: "index", typ: r("LibraryID") },
        { json: "name", js: "name", typ: r("ReturnsValue") },
        { json: "language", js: "language", typ: r("ReturnsValue") },
        { json: "codec", js: "codec", typ: r("ReturnsValue") },
        { json: "bitrate", js: "bitrate", typ: r("ReturnsValue") },
        { json: "channels", js: "channels", typ: r("ReturnsValue") },
        { json: "isdefault", js: "isdefault", typ: r("ReturnsValue") },
        { json: "isoriginal", js: "isoriginal", typ: r("ReturnsValue") },
        { json: "isimpaired", js: "isimpaired", typ: r("ReturnsValue") },
        { json: "samplerate", js: "samplerate", typ: r("ReturnsValue") },
    ], false),
    "PlayerCustomViewMode": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "required", js: "required", typ: true },
        { json: "properties", js: "properties", typ: r("PlayerCustomViewModeProperties") },
    ], false),
    "PlayerCustomViewModeProperties": o([
        { json: "zoom", js: "zoom", typ: r("Pixelratio") },
        { json: "pixelratio", js: "pixelratio", typ: r("Pixelratio") },
        { json: "verticalshift", js: "verticalshift", typ: r("Pixelratio") },
        { json: "nonlinearstretch", js: "nonlinearstretch", typ: r("PVRChannelGroupID") },
    ], false),
    "Pixelratio": o([
        { json: "type", js: "type", typ: a(r("PixelratioType")) },
    ], false),
    "PixelratioType": o([
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "enum", js: "enum", typ: u(undefined, a("")) },
        { json: "required", js: "required", typ: true },
        { json: "$ref", js: "$ref", typ: u(undefined, r("ParamRef")) },
        { json: "minimum", js: "minimum", typ: u(undefined, 3.14) },
        { json: "maximum", js: "maximum", typ: u(undefined, 0) },
        { json: "description", js: "description", typ: u(undefined, "") },
    ], false),
    "PlayerGetActivePlayers": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a("any") },
        { json: "returns", js: "returns", typ: r("PlayerGetActivePlayersReturns") },
    ], false),
    "PlayerGetActivePlayersReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "uniqueItems", js: "uniqueItems", typ: true },
        { json: "items", js: "items", typ: r("PurpleItems") },
    ], false),
    "PurpleItems": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties40") },
    ], false),
    "Properties40": o([
        { json: "playerid", js: "playerid", typ: r("AlbumidElement") },
        { json: "type", js: "type", typ: r("AlbumidElement") },
        { json: "playertype", js: "playertype", typ: r("Language") },
    ], false),
    "PlayerEtAudioDelay": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibrarySetAlbumDetailsParam")) },
        { json: "returns", js: "returns", typ: r("PlayerGetAudioDelayReturns") },
    ], false),
    "PlayerGetAudioDelayReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties41") },
    ], false),
    "Properties41": o([
        { json: "offset", js: "offset", typ: r("LibraryID") },
    ], false),
    "PlayerGetItem": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("RecordingidElement")) },
        { json: "returns", js: "returns", typ: r("PlayerGetItemReturns") },
    ], false),
    "PlayerGetItemReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties42") },
    ], false),
    "Properties42": o([
        { json: "item", js: "item", typ: r("AlbumidElement") },
    ], false),
    "PlayerGetPlayers": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonContent")) },
        { json: "returns", js: "returns", typ: r("PlayerGetPlayersReturns") },
    ], false),
    "PlayerGetPlayersReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "uniqueItems", js: "uniqueItems", typ: true },
        { json: "items", js: "items", typ: r("FluffyItems") },
    ], false),
    "FluffyItems": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties43") },
    ], false),
    "Properties43": o([
        { json: "name", js: "name", typ: r("AlbumidElement") },
        { json: "type", js: "type", typ: r("Language") },
        { json: "playsvideo", js: "playsvideo", typ: r("ReturnsValue") },
        { json: "playsaudio", js: "playsaudio", typ: r("ReturnsValue") },
    ], false),
    "PlayerGetViewMode": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a("any") },
        { json: "returns", js: "returns", typ: r("PlayerGetViewModeReturns") },
    ], false),
    "PlayerGetViewModeReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties44") },
    ], false),
    "Properties44": o([
        { json: "viewmode", js: "viewmode", typ: r("AlbumidElement") },
        { json: "zoom", js: "zoom", typ: r("ReturnsValue") },
        { json: "pixelratio", js: "pixelratio", typ: r("ReturnsValue") },
        { json: "verticalshift", js: "verticalshift", typ: r("ReturnsValue") },
        { json: "nonlinearstretch", js: "nonlinearstretch", typ: r("ReturnsValue") },
    ], false),
    "PlayerMove": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: r("Permission") },
        { json: "params", js: "params", typ: a(r("Filetype")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "PlayerNotificationsData": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("PlayerNotificationsDataProperties") },
    ], false),
    "PlayerNotificationsDataProperties": o([
        { json: "item", js: "item", typ: r("AlbumidElement") },
        { json: "player", js: "player", typ: r("AlbumidElement") },
    ], false),
    "PlayerNotificationsPlayer": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("PlayerNotificationsPlayerProperties") },
    ], false),
    "PlayerNotificationsPlayerProperties": o([
        { json: "playerid", js: "playerid", typ: r("AlbumidElement") },
        { json: "speed", js: "speed", typ: r("AuthorClass") },
    ], false),
    "PlayerNotificationsPlayerSeek": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("PlayerNotificationsPlayerSeekProperties") },
    ], false),
    "PlayerNotificationsPlayerSeekProperties": o([
        { json: "time", js: "time", typ: r("AdditionalProperties") },
        { json: "seekoffset", js: "seekoffset", typ: r("AdditionalProperties") },
    ], false),
    "PlayerOn": o([
        { json: "type", js: "type", typ: r("ApplicationOnVolumeChangedType") },
        { json: "description", js: "description", typ: "" },
        { json: "params", js: "params", typ: a(r("PlayerOnAVChangeParam")) },
        { json: "returns", js: "returns", typ: null },
    ], false),
    "PlayerOnAVChangeParam": o([
        { json: "name", js: "name", typ: r("FluffyName") },
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "required", js: "required", typ: true },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
    ], false),
    "Play": o([
        { json: "type", js: "type", typ: r("ApplicationOnVolumeChangedType") },
        { json: "description", js: "description", typ: "" },
        { json: "params", js: "params", typ: a(r("FileElement")) },
        { json: "returns", js: "returns", typ: null },
    ], false),
    "PlayerOpen": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: r("Permission") },
        { json: "params", js: "params", typ: a(r("PlayerOpenParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "PlayerOpenParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: u(a(r("MagentaType")), r("ReturnsElement")) },
        { json: "additionalProperties", js: "additionalProperties", typ: u(undefined, true) },
        { json: "properties", js: "properties", typ: u(undefined, r("Properties45")) },
    ], false),
    "Properties45": o([
        { json: "playername", js: "playername", typ: r("Playername") },
        { json: "shuffled", js: "shuffled", typ: r("AdditionalProperties") },
        { json: "repeat", js: "repeat", typ: r("Banner") },
        { json: "resume", js: "resume", typ: r("Resume") },
    ], false),
    "Playername": o([
        { json: "type", js: "type", typ: a(u(r("Filetype"), r("ReturnsElement"))) },
        { json: "default", js: "default", typ: null },
    ], false),
    "Resume": o([
        { json: "type", js: "type", typ: a(r("Filetype")) },
        { json: "default", js: "default", typ: true },
    ], false),
    "MagentaType": o([
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "required", js: "required", typ: true },
        { json: "additionalProperties", js: "additionalProperties", typ: u(undefined, true) },
        { json: "properties", js: "properties", typ: u(undefined, r("Properties46")) },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
    ], false),
    "Properties46": o([
        { json: "playlistid", js: "playlistid", typ: u(undefined, r("AlbumidElement")) },
        { json: "position", js: "position", typ: u(undefined, r("Position")) },
        { json: "path", js: "path", typ: u(undefined, r("ReturnsValue")) },
        { json: "random", js: "random", typ: u(undefined, r("GetreferencesElement")) },
        { json: "recursive", js: "recursive", typ: u(undefined, r("Ignorearticle")) },
        { json: "partymode", js: "partymode", typ: u(undefined, r("GlobalToggle")) },
        { json: "broadcastid", js: "broadcastid", typ: u(undefined, r("AlbumidElement")) },
        { json: "channelid", js: "channelid", typ: u(undefined, r("AlbumidElement")) },
        { json: "recordingid", js: "recordingid", typ: u(undefined, r("AlbumidElement")) },
    ], false),
    "Position": o([
        { json: "$ref", js: "$ref", typ: r("ParamRef") },
        { json: "default", js: "default", typ: 0 },
    ], false),
    "PlayerPropertyValue": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("PlayerPropertyValueProperties") },
    ], false),
    "PlayerPropertyValueProperties": o([
        { json: "type", js: "type", typ: r("AdditionalProperties") },
        { json: "partymode", js: "partymode", typ: r("AuthorClass") },
        { json: "speed", js: "speed", typ: r("AuthorClass") },
        { json: "time", js: "time", typ: r("AdditionalProperties") },
        { json: "percentage", js: "percentage", typ: r("AdditionalProperties") },
        { json: "totaltime", js: "totaltime", typ: r("AdditionalProperties") },
        { json: "playlistid", js: "playlistid", typ: r("AdditionalProperties") },
        { json: "position", js: "position", typ: r("AdditionalProperties") },
        { json: "repeat", js: "repeat", typ: r("AdditionalProperties") },
        { json: "shuffled", js: "shuffled", typ: r("AuthorClass") },
        { json: "canseek", js: "canseek", typ: r("AuthorClass") },
        { json: "canchangespeed", js: "canchangespeed", typ: r("AuthorClass") },
        { json: "canmove", js: "canmove", typ: r("AuthorClass") },
        { json: "canzoom", js: "canzoom", typ: r("AuthorClass") },
        { json: "canrotate", js: "canrotate", typ: r("AuthorClass") },
        { json: "canshuffle", js: "canshuffle", typ: r("AuthorClass") },
        { json: "canrepeat", js: "canrepeat", typ: r("AuthorClass") },
        { json: "currentaudiostream", js: "currentaudiostream", typ: r("AdditionalProperties") },
        { json: "audiostreams", js: "audiostreams", typ: r("SettingValueList") },
        { json: "currentvideostream", js: "currentvideostream", typ: r("AdditionalProperties") },
        { json: "videostreams", js: "videostreams", typ: r("SettingValueList") },
        { json: "subtitleenabled", js: "subtitleenabled", typ: r("AuthorClass") },
        { json: "currentsubtitle", js: "currentsubtitle", typ: r("AdditionalProperties") },
        { json: "subtitles", js: "subtitles", typ: r("SettingValueList") },
        { json: "live", js: "live", typ: r("AuthorClass") },
        { json: "cachepercentage", js: "cachepercentage", typ: r("AdditionalProperties") },
    ], false),
    "PlayerSeek": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: r("Permission") },
        { json: "params", js: "params", typ: a(r("SkinElement")) },
        { json: "returns", js: "returns", typ: r("PlayerSeekReturns") },
    ], false),
    "PlayerSeekReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties47") },
    ], false),
    "Properties47": o([
        { json: "percentage", js: "percentage", typ: r("AdditionalProperties") },
        { json: "time", js: "time", typ: r("AdditionalProperties") },
        { json: "totaltime", js: "totaltime", typ: r("AdditionalProperties") },
    ], false),
    "PlayerSetOStream": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: r("Permission") },
        { json: "params", js: "params", typ: a(r("PlayerSetAudioStreamParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "PlayerSetAudioStreamParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "$ref", js: "$ref", typ: u(undefined, r("ParamRef")) },
        { json: "required", js: "required", typ: true },
        { json: "type", js: "type", typ: u(undefined, a(r("FriskyType"))) },
    ], false),
    "FriskyType": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "enum", js: "enum", typ: u(undefined, a("")) },
        { json: "minimum", js: "minimum", typ: u(undefined, 0) },
    ], false),
    "PlayerSetSubtitle": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: r("Permission") },
        { json: "params", js: "params", typ: a(r("PlayerSetSubtitleParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "PlayerSetSubtitleParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "$ref", js: "$ref", typ: u(undefined, r("ParamRef")) },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "type", js: "type", typ: u(undefined, u(a(r("Language")), r("ReturnsElement"))) },
        { json: "default", js: "default", typ: u(undefined, true) },
        { json: "description", js: "description", typ: u(undefined, "") },
    ], false),
    "PlayerSetViewMode": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: r("Permission") },
        { json: "params", js: "params", typ: a(r("PlayerSetViewModeParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "PlayerSetViewModeParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: a(r("PVRRecordParam")) },
        { json: "required", js: "required", typ: true },
    ], false),
    "PlayerSpeed": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "required", js: "required", typ: true },
        { json: "properties", js: "properties", typ: r("PlayerSpeedProperties") },
    ], false),
    "PlayerSpeedProperties": o([
        { json: "speed", js: "speed", typ: r("AuthorClass") },
    ], false),
    "PlayerSubtitle": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("PlayerSubtitleProperties") },
    ], false),
    "PlayerSubtitleProperties": o([
        { json: "index", js: "index", typ: r("LibraryID") },
        { json: "name", js: "name", typ: r("ReturnsValue") },
        { json: "language", js: "language", typ: r("ReturnsValue") },
        { json: "isdefault", js: "isdefault", typ: r("ReturnsValue") },
        { json: "isforced", js: "isforced", typ: r("ReturnsValue") },
        { json: "isimpaired", js: "isimpaired", typ: r("ReturnsValue") },
    ], false),
    "PlayerTempo": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "required", js: "required", typ: true },
        { json: "properties", js: "properties", typ: r("PlayerTempoProperties") },
    ], false),
    "PlayerTempoProperties": o([
        { json: "tempo", js: "tempo", typ: r("AuthorClass") },
    ], false),
    "PlayerVideoStream": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("PlayerVideoStreamProperties") },
    ], false),
    "PlayerVideoStreamProperties": o([
        { json: "index", js: "index", typ: r("LibraryID") },
        { json: "name", js: "name", typ: r("ReturnsValue") },
        { json: "language", js: "language", typ: r("ReturnsValue") },
        { json: "codec", js: "codec", typ: r("ReturnsValue") },
        { json: "width", js: "width", typ: r("ReturnsValue") },
        { json: "height", js: "height", typ: r("ReturnsValue") },
    ], false),
    "Playlist": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: r("Permission") },
        { json: "params", js: "params", typ: a(r("PlaylistAddParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "PlaylistAddParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "$ref", js: "$ref", typ: u(undefined, r("ParamRef")) },
        { json: "required", js: "required", typ: true },
        { json: "type", js: "type", typ: u(undefined, a(r("MischievousType"))) },
    ], false),
    "MischievousType": o([
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "required", js: "required", typ: true },
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "items", js: "items", typ: u(undefined, r("AdditionalProperties")) },
    ], false),
    "PlaylistGetItems": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("SkinElement")) },
        { json: "returns", js: "returns", typ: r("PlaylistGetItemsReturns") },
    ], false),
    "PlaylistGetItemsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties48") },
    ], false),
    "Properties48": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "items", js: "items", typ: r("Groups") },
    ], false),
    "PlaylistGetPlaylists": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a("any") },
        { json: "returns", js: "returns", typ: r("PlaylistGetPlaylistsReturns") },
    ], false),
    "PlaylistGetPlaylistsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "uniqueItems", js: "uniqueItems", typ: true },
        { json: "items", js: "items", typ: r("TentacledItems") },
    ], false),
    "TentacledItems": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties49") },
    ], false),
    "Properties49": o([
        { json: "playlistid", js: "playlistid", typ: r("AlbumidElement") },
        { json: "type", js: "type", typ: r("AlbumidElement") },
    ], false),
    "PlaylistItem": o([
        { json: "type", js: "type", typ: a(r("PlaylistItemType")) },
    ], false),
    "PlaylistItemType": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties50") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "Properties50": o([
        { json: "file", js: "file", typ: u(undefined, r("LibraryID")) },
        { json: "directory", js: "directory", typ: u(undefined, r("ReturnsValue")) },
        { json: "recursive", js: "recursive", typ: u(undefined, r("Ignorearticle")) },
        { json: "media", js: "media", typ: u(undefined, r("Media")) },
        { json: "movieid", js: "movieid", typ: u(undefined, r("AlbumidElement")) },
        { json: "episodeid", js: "episodeid", typ: u(undefined, r("AlbumidElement")) },
        { json: "musicvideoid", js: "musicvideoid", typ: u(undefined, r("AlbumidElement")) },
        { json: "artistid", js: "artistid", typ: u(undefined, r("AlbumidElement")) },
        { json: "albumid", js: "albumid", typ: u(undefined, r("AlbumidElement")) },
        { json: "songid", js: "songid", typ: u(undefined, r("AlbumidElement")) },
        { json: "genreid", js: "genreid", typ: u(undefined, r("LibraryID")) },
        { json: "recordingid", js: "recordingid", typ: u(undefined, r("RecordingidElement")) },
    ], false),
    "Media": o([
        { json: "$ref", js: "$ref", typ: "" },
        { json: "default", js: "default", typ: "" },
    ], false),
    "PlaylistOnAdd": o([
        { json: "type", js: "type", typ: r("ApplicationOnVolumeChangedType") },
        { json: "description", js: "description", typ: "" },
        { json: "params", js: "params", typ: a(r("RecordingidElement")) },
        { json: "returns", js: "returns", typ: null },
    ], false),
    "PlaylistPropertyValue": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("PlaylistPropertyValueProperties") },
    ], false),
    "PlaylistPropertyValueProperties": o([
        { json: "type", js: "type", typ: r("AdditionalProperties") },
        { json: "size", js: "size", typ: r("Size") },
    ], false),
    "Size": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "minimum", js: "minimum", typ: 0 },
    ], false),
    "ProfilesDetailsProfile": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("ProfilesDetailsProfileProperties") },
    ], false),
    "ProfilesDetailsProfileProperties": o([
        { json: "thumbnail", js: "thumbnail", typ: r("AuthorClass") },
        { json: "lockmode", js: "lockmode", typ: r("AuthorClass") },
    ], false),
    "ProfilesGetCurrentProfile": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetGenresParam")) },
        { json: "returns", js: "returns", typ: r("AlbumidElement") },
    ], false),
    "ProfilesGetProfiles": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetGenresParam")) },
        { json: "returns", js: "returns", typ: r("ProfilesGetProfilesReturns") },
    ], false),
    "ProfilesGetProfilesReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties51") },
    ], false),
    "Properties51": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "profiles", js: "profiles", typ: r("Groups") },
    ], false),
    "ProfilesPassword": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("ProfilesPasswordProperties") },
    ], false),
    "ProfilesPasswordProperties": o([
        { json: "value", js: "value", typ: r("Language") },
        { json: "encryption", js: "encryption", typ: r("AddonContent") },
    ], false),
    "SettingDetailsBase": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("SettingDetailsBaseProperties") },
    ], false),
    "SettingDetailsBaseProperties": o([
        { json: "id", js: "id", typ: r("Language") },
        { json: "label", js: "label", typ: r("ReturnsValue") },
        { json: "help", js: "help", typ: r("AuthorClass") },
    ], false),
    "SettingDetailsCategory": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("SettingDetailsCategoryProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "SettingDetailsCategoryProperties": o([
        { json: "groups", js: "groups", typ: r("Groups") },
    ], false),
    "SettingDetails": o([
        { json: "type", js: "type", typ: a(r("AlbumidElement")) },
    ], false),
    "SettingDetailsControlBase": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("SettingDetailsControlBaseProperties") },
    ], false),
    "SettingDetailsControlBaseProperties": o([
        { json: "type", js: "type", typ: r("ReturnsValue") },
        { json: "format", js: "format", typ: r("ReturnsValue") },
        { json: "delayed", js: "delayed", typ: r("ReturnsValue") },
    ], false),
    "SettingDetailsControlButton": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("SettingDetailsControlButtonProperties") },
    ], false),
    "SettingDetailsControlButtonProperties": o([
        { json: "type", js: "type", typ: r("Language") },
    ], false),
    "SettingDetailsControl": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("SettingDetailsControlCheckmarkProperties") },
    ], false),
    "SettingDetailsControlCheckmarkProperties": o([
        { json: "type", js: "type", typ: r("Format") },
        { json: "format", js: "format", typ: r("Format") },
    ], false),
    "Format": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "required", js: "required", typ: true },
        { json: "enum", js: "enum", typ: a("") },
    ], false),
    "SettingDetailsControlEdit": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("SettingDetailsControlEditProperties") },
    ], false),
    "SettingDetailsControlEditProperties": o([
        { json: "type", js: "type", typ: r("AddonsGetAddonDetailsParam") },
        { json: "hidden", js: "hidden", typ: r("ReturnsValue") },
        { json: "verifynewvalue", js: "verifynewvalue", typ: r("ReturnsValue") },
    ], false),
    "SettingDetailsControlHeading": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("SettingDetailsControlHeadingProperties") },
    ], false),
    "SettingDetailsControlHeadingProperties": o([
        { json: "heading", js: "heading", typ: r("AuthorClass") },
    ], false),
    "SettingDetailsControlList": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("SettingDetailsControlListProperties") },
    ], false),
    "SettingDetailsControlListProperties": o([
        { json: "type", js: "type", typ: r("Filetype") },
        { json: "multiselect", js: "multiselect", typ: r("ReturnsValue") },
    ], false),
    "SettingDetailsControlRange": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("SettingDetailsControlRangeProperties") },
    ], false),
    "SettingDetailsControlRangeProperties": o([
        { json: "type", js: "type", typ: r("Language") },
        { json: "formatlabel", js: "formatlabel", typ: r("ReturnsValue") },
        { json: "formatvalue", js: "formatvalue", typ: r("ReturnsValue") },
    ], false),
    "SettingDetailsControlSlider": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("SettingDetailsControlSliderProperties") },
    ], false),
    "SettingDetailsControlSliderProperties": o([
        { json: "type", js: "type", typ: r("LibraryID") },
        { json: "formatlabel", js: "formatlabel", typ: r("ReturnsValue") },
        { json: "popup", js: "popup", typ: r("ReturnsValue") },
    ], false),
    "SettingDetailsControlSpinner": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("SettingDetailsControlSpinnerProperties") },
    ], false),
    "SettingDetailsControlSpinnerProperties": o([
        { json: "type", js: "type", typ: r("AddonsGetAddonDetailsParam") },
        { json: "formatlabel", js: "formatlabel", typ: r("AuthorClass") },
        { json: "minimumlabel", js: "minimumlabel", typ: r("AuthorClass") },
    ], false),
    "SettingDetailsGroup": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("SettingDetailsGroupProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "SettingDetailsGroupProperties": o([
        { json: "id", js: "id", typ: r("Language") },
        { json: "settings", js: "settings", typ: r("Groups") },
    ], false),
    "SettingDetailsSection": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("SettingDetailsSectionProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "SettingDetailsSectionProperties": o([
        { json: "categories", js: "categories", typ: r("Weekdays") },
    ], false),
    "SettingDetailsSettingAction": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("SettingDetailsSettingActionProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "SettingDetailsSettingActionProperties": o([
        { json: "data", js: "data", typ: r("ReturnsValue") },
    ], false),
    "SettingDetailsSettingAddon": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("SettingDetailsSettingAddonProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "SettingDetailsSettingAddonProperties": o([
        { json: "addontype", js: "addontype", typ: r("AlbumidElement") },
    ], false),
    "SettingDetailsSettingBase": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("SettingDetailsSettingBaseProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "SettingDetailsSettingBaseProperties": o([
        { json: "type", js: "type", typ: r("AlbumidElement") },
        { json: "enabled", js: "enabled", typ: r("ReturnsValue") },
        { json: "level", js: "level", typ: r("AlbumidElement") },
        { json: "parent", js: "parent", typ: r("AuthorClass") },
        { json: "control", js: "control", typ: r("AdditionalProperties") },
    ], false),
    "SettingDetailsSettingBool": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("SettingDetailsSettingBoolProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "SettingDetailsSettingBoolProperties": o([
        { json: "value", js: "value", typ: r("ReturnsValue") },
        { json: "default", js: "default", typ: r("ReturnsValue") },
    ], false),
    "SettingDetailsSetting": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "SettingDetailsSettingInt": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("SettingDetailsSettingIntProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "SettingDetailsSettingIntProperties": o([
        { json: "value", js: "value", typ: r("ReturnsValue") },
        { json: "default", js: "default", typ: r("ReturnsValue") },
        { json: "minimum", js: "minimum", typ: r("AuthorClass") },
        { json: "step", js: "step", typ: r("AuthorClass") },
        { json: "maximum", js: "maximum", typ: r("AuthorClass") },
        { json: "options", js: "options", typ: r("Options") },
    ], false),
    "Options": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "items", js: "items", typ: r("OptionsItems") },
    ], false),
    "OptionsItems": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties52") },
    ], false),
    "Properties52": o([
        { json: "label", js: "label", typ: r("ReturnsValue") },
        { json: "value", js: "value", typ: r("ReturnsValue") },
    ], false),
    "SettingDetailsSettingList": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("SettingDetailsSettingListProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "SettingDetailsSettingListProperties": o([
        { json: "value", js: "value", typ: r("AlbumidElement") },
        { json: "default", js: "default", typ: r("AlbumidElement") },
        { json: "elementtype", js: "elementtype", typ: r("AlbumidElement") },
        { json: "definition", js: "definition", typ: r("AlbumidElement") },
        { json: "delimiter", js: "delimiter", typ: r("ReturnsValue") },
        { json: "minimumItems", js: "minimumItems", typ: r("AuthorClass") },
        { json: "maximumItems", js: "maximumItems", typ: r("AuthorClass") },
    ], false),
    "SettingDetailsSettingNumber": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("SettingDetailsSettingNumberProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "SettingDetailsSettingNumberProperties": o([
        { json: "value", js: "value", typ: r("ReturnsValue") },
        { json: "default", js: "default", typ: r("ReturnsValue") },
        { json: "minimum", js: "minimum", typ: r("ReturnsValue") },
        { json: "step", js: "step", typ: r("ReturnsValue") },
        { json: "maximum", js: "maximum", typ: r("ReturnsValue") },
    ], false),
    "SettingDetailsSettingPath": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("SettingDetailsSettingPathProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "SettingDetailsSettingPathProperties": o([
        { json: "writable", js: "writable", typ: r("ReturnsValue") },
        { json: "sources", js: "sources", typ: r("ArrayInteger") },
    ], false),
    "SettingDetailsSettingString": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("SettingDetailsSettingStringProperties") },
    ], false),
    "SettingDetailsSettingStringProperties": o([
        { json: "value", js: "value", typ: r("ReturnsValue") },
        { json: "default", js: "default", typ: r("ReturnsValue") },
        { json: "allowempty", js: "allowempty", typ: r("ReturnsValue") },
        { json: "options", js: "options", typ: r("Options") },
    ], false),
    "SettingValue": o([
        { json: "type", js: "type", typ: a(r("ReturnsValue")) },
    ], false),
    "SettingsGetCategories": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("SettingsGetCategoriesParam")) },
        { json: "returns", js: "returns", typ: r("SettingsGetCategoriesReturns") },
    ], false),
    "SettingsGetCategoriesParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "$ref", js: "$ref", typ: u(undefined, r("ParamRef")) },
        { json: "default", js: "default", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "extends", js: "extends", typ: u(undefined, r("Extends")) },
        { json: "items", js: "items", typ: u(undefined, r("ApplicationPropertyName")) },
    ], false),
    "SettingsGetCategoriesReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties53") },
    ], false),
    "Properties53": o([
        { json: "categories", js: "categories", typ: r("SettingValueList") },
    ], false),
    "SettingsGetSections": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("SettingsGetCategoriesParam")) },
        { json: "returns", js: "returns", typ: r("SettingsGetSectionsReturns") },
    ], false),
    "SettingsGetSectionsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties54") },
    ], false),
    "Properties54": o([
        { json: "sections", js: "sections", typ: r("SettingValueList") },
    ], false),
    "SettingsGetSettingValue": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("Language")) },
        { json: "returns", js: "returns", typ: r("SettingsGetSettingValueReturns") },
    ], false),
    "SettingsGetSettingValueReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties55") },
    ], false),
    "Properties55": o([
        { json: "value", js: "value", typ: r("AlbumidElement") },
    ], false),
    "SettingsGetSettings": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibrarySetAlbumDetailsParam")) },
        { json: "returns", js: "returns", typ: r("SettingsGetSettingsReturns") },
    ], false),
    "SettingsGetSettingsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties56") },
    ], false),
    "Properties56": o([
        { json: "settings", js: "settings", typ: r("SettingValueList") },
    ], false),
    "SettingsGetSkinSettingValue": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("SkinElement")) },
        { json: "returns", js: "returns", typ: r("SettingsGetSkinSettingValueReturns") },
    ], false),
    "SettingsGetSkinSettingValueReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties57") },
    ], false),
    "Properties57": o([
        { json: "value", js: "value", typ: r("FluffyValue") },
    ], false),
    "FluffyValue": o([
        { json: "type", js: "type", typ: a(r("ReturnsElement")) },
        { json: "required", js: "required", typ: true },
    ], false),
    "SettingsGetSkinSettings": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "returns", js: "returns", typ: r("SettingsGetSkinSettingsReturns") },
    ], false),
    "SettingsGetSkinSettingsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties58") },
    ], false),
    "Properties58": o([
        { json: "skin", js: "skin", typ: r("SkinElement") },
        { json: "settings", js: "settings", typ: r("Settings") },
    ], false),
    "Settings": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "items", js: "items", typ: r("SettingsItems") },
    ], false),
    "SettingsItems": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties59") },
    ], false),
    "Properties59": o([
        { json: "id", js: "id", typ: r("Language") },
        { json: "type", js: "type", typ: r("Language") },
        { json: "value", js: "value", typ: r("FluffyValue") },
    ], false),
    "SettingsResetSettingValue": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("RecordingidElement")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "SettingsSetSkinSettingValue": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("SettingsSetSkinSettingValueParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "SettingsSetSkinSettingValueParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: u(a(r("ReturnsElement")), r("ReturnsElement")) },
        { json: "required", js: "required", typ: true },
        { json: "minLength", js: "minLength", typ: u(undefined, 0) },
    ], false),
    "SystemOnQuit": o([
        { json: "type", js: "type", typ: r("ApplicationOnVolumeChangedType") },
        { json: "description", js: "description", typ: "" },
        { json: "params", js: "params", typ: a(r("Language")) },
        { json: "returns", js: "returns", typ: null },
    ], false),
    "SystemPropertyValue": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("SystemPropertyValueProperties") },
    ], false),
    "SystemPropertyValueProperties": o([
        { json: "canshutdown", js: "canshutdown", typ: r("AuthorClass") },
        { json: "cansuspend", js: "cansuspend", typ: r("AuthorClass") },
        { json: "canhibernate", js: "canhibernate", typ: r("AuthorClass") },
        { json: "canreboot", js: "canreboot", typ: r("AuthorClass") },
    ], false),
    "TexturesDetailsSize": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("TexturesDetailsSizeProperties") },
    ], false),
    "TexturesDetailsSizeProperties": o([
        { json: "size", js: "size", typ: r("DynpathClass") },
        { json: "width", js: "width", typ: r("DynpathClass") },
        { json: "height", js: "height", typ: r("DynpathClass") },
        { json: "usecount", js: "usecount", typ: r("DynpathClass") },
        { json: "lastused", js: "lastused", typ: r("DynpathClass") },
    ], false),
    "TexturesDetailsTexture": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("TexturesDetailsTextureProperties") },
    ], false),
    "TexturesDetailsTextureProperties": o([
        { json: "textureid", js: "textureid", typ: r("Textureid") },
        { json: "url", js: "url", typ: r("DynpathClass") },
        { json: "cachedurl", js: "cachedurl", typ: r("DynpathClass") },
        { json: "lasthashcheck", js: "lasthashcheck", typ: r("DynpathClass") },
        { json: "imagehash", js: "imagehash", typ: r("DynpathClass") },
        { json: "sizes", js: "sizes", typ: r("SettingValueList") },
    ], false),
    "Textureid": o([
        { json: "$ref", js: "$ref", typ: r("ParamRef") },
        { json: "required", js: "required", typ: "" },
    ], false),
    "TexturesGetTextures": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetGenresParam")) },
        { json: "returns", js: "returns", typ: r("TexturesGetTexturesReturns") },
    ], false),
    "TexturesGetTexturesReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties60") },
    ], false),
    "Properties60": o([
        { json: "textures", js: "textures", typ: r("Groups") },
    ], false),
    "VideoCast": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "items", js: "items", typ: r("VideoCastItems") },
    ], false),
    "VideoCastItems": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties61") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "Properties61": o([
        { json: "name", js: "name", typ: r("ReturnsValue") },
        { json: "role", js: "role", typ: r("ReturnsValue") },
        { json: "order", js: "order", typ: r("ReturnsValue") },
        { json: "thumbnail", js: "thumbnail", typ: r("AuthorClass") },
    ], false),
    "VideoDetailsBase": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("VideoDetailsBaseProperties") },
    ], false),
    "VideoDetailsBaseProperties": o([
        { json: "playcount", js: "playcount", typ: r("AuthorClass") },
        { json: "art", js: "art", typ: r("AdditionalProperties") },
    ], false),
    "VideoDetailsEpisode": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("VideoDetailsEpisodeProperties") },
    ], false),
    "VideoDetailsEpisodeProperties": o([
        { json: "episodeid", js: "episodeid", typ: r("AlbumidElement") },
        { json: "votes", js: "votes", typ: r("AuthorClass") },
        { json: "rating", js: "rating", typ: r("AuthorClass") },
        { json: "writer", js: "writer", typ: r("AdditionalProperties") },
        { json: "firstaired", js: "firstaired", typ: r("AuthorClass") },
        { json: "productioncode", js: "productioncode", typ: r("AuthorClass") },
        { json: "season", js: "season", typ: r("AuthorClass") },
        { json: "episode", js: "episode", typ: r("AuthorClass") },
        { json: "uniqueid", js: "uniqueid", typ: r("AdditionalProperties") },
        { json: "originaltitle", js: "originaltitle", typ: r("AuthorClass") },
        { json: "showtitle", js: "showtitle", typ: r("AuthorClass") },
        { json: "cast", js: "cast", typ: r("AdditionalProperties") },
        { json: "tvshowid", js: "tvshowid", typ: r("AdditionalProperties") },
        { json: "specialsortseason", js: "specialsortseason", typ: r("AuthorClass") },
        { json: "specialsortepisode", js: "specialsortepisode", typ: r("AuthorClass") },
        { json: "userrating", js: "userrating", typ: r("AuthorClass") },
        { json: "seasonid", js: "seasonid", typ: r("AdditionalProperties") },
        { json: "ratings", js: "ratings", typ: r("AuthorClass") },
        { json: "studio", js: "studio", typ: r("AdditionalProperties") },
        { json: "genre", js: "genre", typ: r("AdditionalProperties") },
    ], false),
    "VideoDetailsFile": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("VideoDetailsFileProperties") },
    ], false),
    "VideoDetailsFileProperties": o([
        { json: "runtime", js: "runtime", typ: r("DynpathClass") },
        { json: "director", js: "director", typ: r("AdditionalProperties") },
        { json: "streamdetails", js: "streamdetails", typ: r("AdditionalProperties") },
        { json: "resume", js: "resume", typ: r("AdditionalProperties") },
    ], false),
    "VideoDetailsItem": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("VideoDetailsItemProperties") },
    ], false),
    "VideoDetailsItemProperties": o([
        { json: "file", js: "file", typ: r("AuthorClass") },
        { json: "plot", js: "plot", typ: r("AuthorClass") },
        { json: "lastplayed", js: "lastplayed", typ: r("AuthorClass") },
        { json: "dateadded", js: "dateadded", typ: r("AuthorClass") },
    ], false),
    "VideoDetailsMedia": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("VideoDetailsMediaProperties") },
    ], false),
    "VideoDetailsMediaProperties": o([
        { json: "title", js: "title", typ: r("AuthorClass") },
    ], false),
    "VideoDetailsMovie": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("VideoDetailsMovieProperties") },
    ], false),
    "VideoDetailsMovieProperties": o([
        { json: "movieid", js: "movieid", typ: r("AlbumidElement") },
        { json: "genre", js: "genre", typ: r("AdditionalProperties") },
        { json: "year", js: "year", typ: r("AuthorClass") },
        { json: "rating", js: "rating", typ: r("AuthorClass") },
        { json: "trailer", js: "trailer", typ: r("AuthorClass") },
        { json: "tagline", js: "tagline", typ: r("AuthorClass") },
        { json: "plotoutline", js: "plotoutline", typ: r("AuthorClass") },
        { json: "originaltitle", js: "originaltitle", typ: r("AuthorClass") },
        { json: "sorttitle", js: "sorttitle", typ: r("AuthorClass") },
        { json: "writer", js: "writer", typ: r("AdditionalProperties") },
        { json: "studio", js: "studio", typ: r("AdditionalProperties") },
        { json: "mpaa", js: "mpaa", typ: r("AuthorClass") },
        { json: "cast", js: "cast", typ: r("AdditionalProperties") },
        { json: "country", js: "country", typ: r("AdditionalProperties") },
        { json: "imdbnumber", js: "imdbnumber", typ: r("AuthorClass") },
        { json: "set", js: "set", typ: r("AuthorClass") },
        { json: "showlink", js: "showlink", typ: r("AdditionalProperties") },
        { json: "top250", js: "top250", typ: r("AuthorClass") },
        { json: "votes", js: "votes", typ: r("AuthorClass") },
        { json: "setid", js: "setid", typ: r("AdditionalProperties") },
        { json: "tag", js: "tag", typ: r("AdditionalProperties") },
        { json: "userrating", js: "userrating", typ: r("AuthorClass") },
        { json: "ratings", js: "ratings", typ: r("AuthorClass") },
        { json: "premiered", js: "premiered", typ: r("AuthorClass") },
        { json: "uniqueid", js: "uniqueid", typ: r("AdditionalProperties") },
    ], false),
    "VideoDetailsMovieSet": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("VideoDetailsMovieSetProperties") },
    ], false),
    "VideoDetailsMovieSetProperties": o([
        { json: "setid", js: "setid", typ: r("AlbumidElement") },
        { json: "plot", js: "plot", typ: r("AuthorClass") },
    ], false),
    "VideoDetailsMovieSetExtended": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("VideoDetailsMovieSetExtendedProperties") },
    ], false),
    "VideoDetailsMovieSetExtendedProperties": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "movies", js: "movies", typ: r("SettingValueList") },
    ], false),
    "VideoDetailsMusicVideo": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("VideoDetailsMusicVideoProperties") },
    ], false),
    "VideoDetailsMusicVideoProperties": o([
        { json: "musicvideoid", js: "musicvideoid", typ: r("AlbumidElement") },
        { json: "studio", js: "studio", typ: r("AdditionalProperties") },
        { json: "year", js: "year", typ: r("AuthorClass") },
        { json: "album", js: "album", typ: r("AuthorClass") },
        { json: "artist", js: "artist", typ: r("AdditionalProperties") },
        { json: "genre", js: "genre", typ: r("AdditionalProperties") },
        { json: "track", js: "track", typ: r("AuthorClass") },
        { json: "tag", js: "tag", typ: r("AdditionalProperties") },
        { json: "rating", js: "rating", typ: r("AuthorClass") },
        { json: "userrating", js: "userrating", typ: r("AuthorClass") },
        { json: "premiered", js: "premiered", typ: r("AuthorClass") },
        { json: "uniqueid", js: "uniqueid", typ: r("AdditionalProperties") },
    ], false),
    "VideoDetailsSeason": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("VideoDetailsSeasonProperties") },
    ], false),
    "VideoDetailsSeasonProperties": o([
        { json: "seasonid", js: "seasonid", typ: r("AlbumidElement") },
        { json: "season", js: "season", typ: r("ReturnsValue") },
        { json: "showtitle", js: "showtitle", typ: r("AuthorClass") },
        { json: "episode", js: "episode", typ: r("AuthorClass") },
        { json: "watchedepisodes", js: "watchedepisodes", typ: r("AuthorClass") },
        { json: "tvshowid", js: "tvshowid", typ: r("AdditionalProperties") },
        { json: "userrating", js: "userrating", typ: r("AuthorClass") },
        { json: "title", js: "title", typ: r("AuthorClass") },
    ], false),
    "VideoDetailsTVShow": o([
        { json: "extends", js: "extends", typ: "" },
        { json: "properties", js: "properties", typ: r("VideoDetailsTVShowProperties") },
    ], false),
    "VideoDetailsTVShowProperties": o([
        { json: "tvshowid", js: "tvshowid", typ: r("AlbumidElement") },
        { json: "genre", js: "genre", typ: r("AdditionalProperties") },
        { json: "year", js: "year", typ: r("AuthorClass") },
        { json: "rating", js: "rating", typ: r("AuthorClass") },
        { json: "originaltitle", js: "originaltitle", typ: r("AuthorClass") },
        { json: "sorttitle", js: "sorttitle", typ: r("AuthorClass") },
        { json: "studio", js: "studio", typ: r("AdditionalProperties") },
        { json: "mpaa", js: "mpaa", typ: r("AuthorClass") },
        { json: "cast", js: "cast", typ: r("AdditionalProperties") },
        { json: "episode", js: "episode", typ: r("AuthorClass") },
        { json: "watchedepisodes", js: "watchedepisodes", typ: r("AuthorClass") },
        { json: "imdbnumber", js: "imdbnumber", typ: r("AuthorClass") },
        { json: "premiered", js: "premiered", typ: r("AuthorClass") },
        { json: "votes", js: "votes", typ: r("AuthorClass") },
        { json: "episodeguide", js: "episodeguide", typ: r("AuthorClass") },
        { json: "season", js: "season", typ: r("AuthorClass") },
        { json: "tag", js: "tag", typ: r("AdditionalProperties") },
        { json: "userrating", js: "userrating", typ: r("AuthorClass") },
        { json: "ratings", js: "ratings", typ: r("AuthorClass") },
        { json: "runtime", js: "runtime", typ: r("DynpathClass") },
        { json: "status", js: "status", typ: r("DynpathClass") },
        { json: "uniqueid", js: "uniqueid", typ: r("AdditionalProperties") },
    ], false),
    "VideoRating": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("VideoRatingProperties") },
    ], false),
    "VideoRatingProperties": o([
        { json: "rating", js: "rating", typ: r("ReturnsValue") },
        { json: "votes", js: "votes", typ: r("AuthorClass") },
        { json: "default", js: "default", typ: r("AuthorClass") },
    ], false),
    "VideoResume": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("VideoResumeProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "VideoResumeProperties": o([
        { json: "position", js: "position", typ: r("Size") },
        { json: "total", js: "total", typ: r("Size") },
    ], false),
    "VideoStreams": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("VideoStreamsProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "VideoStreamsProperties": o([
        { json: "audio", js: "audio", typ: r("Audio") },
        { json: "video", js: "video", typ: r("Video") },
        { json: "subtitle", js: "subtitle", typ: r("Subtitle") },
    ], false),
    "Audio": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "minItems", js: "minItems", typ: 0 },
        { json: "items", js: "items", typ: r("AudioItems") },
    ], false),
    "AudioItems": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties62") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "Properties62": o([
        { json: "codec", js: "codec", typ: r("AuthorClass") },
        { json: "language", js: "language", typ: r("AuthorClass") },
        { json: "channels", js: "channels", typ: r("AuthorClass") },
    ], false),
    "Subtitle": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "minItems", js: "minItems", typ: 0 },
        { json: "items", js: "items", typ: r("SubtitleItems") },
    ], false),
    "SubtitleItems": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties63") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "Properties63": o([
        { json: "language", js: "language", typ: r("AuthorClass") },
    ], false),
    "Video": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "minItems", js: "minItems", typ: 0 },
        { json: "items", js: "items", typ: r("VideoItems") },
    ], false),
    "VideoItems": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties64") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "Properties64": o([
        { json: "codec", js: "codec", typ: r("AuthorClass") },
        { json: "aspect", js: "aspect", typ: r("AuthorClass") },
        { json: "width", js: "width", typ: r("AuthorClass") },
        { json: "height", js: "height", typ: r("AuthorClass") },
        { json: "duration", js: "duration", typ: r("AuthorClass") },
        { json: "hdrtype", js: "hdrtype", typ: r("AuthorClass") },
    ], false),
    "VideoLibraryGetAvailableArt": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("VideoLibraryGetAvailableArtParam")) },
        { json: "returns", js: "returns", typ: r("AudioLibraryGetAvailableArtReturns") },
    ], false),
    "VideoLibraryGetAvailableArtParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "type", js: "type", typ: u(a(r("BraggadociousType")), r("ReturnsElement")) },
    ], false),
    "BraggadociousType": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties65") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "Properties65": o([
        { json: "episodeid", js: "episodeid", typ: u(undefined, r("AlbumidElement")) },
        { json: "tvshowid", js: "tvshowid", typ: u(undefined, r("AlbumidElement")) },
        { json: "seasonid", js: "seasonid", typ: u(undefined, r("AlbumidElement")) },
        { json: "movieid", js: "movieid", typ: u(undefined, r("AlbumidElement")) },
        { json: "setid", js: "setid", typ: u(undefined, r("AlbumidElement")) },
        { json: "musicvideoid", js: "musicvideoid", typ: u(undefined, r("AlbumidElement")) },
    ], false),
    "VideoLibraryGetAvailableArtTypes": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("VideoLibraryGetAvailableArtTypesParam")) },
        { json: "returns", js: "returns", typ: r("AudioLibraryGetAvailableArtTypesReturns") },
    ], false),
    "VideoLibraryGetAvailableArtTypesParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "required", js: "required", typ: true },
        { json: "type", js: "type", typ: a(r("BraggadociousType")) },
    ], false),
    "VideoLibraryGetEpisodeDetails": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("SkinElement")) },
        { json: "returns", js: "returns", typ: r("VideoLibraryGetEpisodeDetailsReturns") },
    ], false),
    "VideoLibraryGetEpisodeDetailsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties66") },
    ], false),
    "Properties66": o([
        { json: "episodedetails", js: "episodedetails", typ: r("AdditionalProperties") },
    ], false),
    "VideoLibraryGetEpisodes": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("VideoLibraryGetEpisodesParam")) },
        { json: "returns", js: "returns", typ: r("VideoLibraryGetEpisodesReturns") },
    ], false),
    "VideoLibraryGetEpisodesParam": o([
        { json: "name", js: "name", typ: r("PurpleName") },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, u(a(r("Type1")), r("ReturnsElement"))) },
        { json: "minimum", js: "minimum", typ: u(undefined, 0) },
        { json: "default", js: "default", typ: u(undefined, 0) },
    ], false),
    "Type1": o([
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "properties", js: "properties", typ: u(undefined, r("Properties67")) },
        { json: "additionalProperties", js: "additionalProperties", typ: u(undefined, true) },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
    ], false),
    "Properties67": o([
        { json: "genreid", js: "genreid", typ: u(undefined, r("RecordingidElement")) },
        { json: "genre", js: "genre", typ: u(undefined, r("RecordingidElement")) },
        { json: "year", js: "year", typ: u(undefined, r("LibraryID")) },
        { json: "actor", js: "actor", typ: u(undefined, r("RecordingidElement")) },
        { json: "director", js: "director", typ: u(undefined, r("RecordingidElement")) },
    ], false),
    "VideoLibraryGetEpisodesReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties68") },
    ], false),
    "Properties68": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "episodes", js: "episodes", typ: r("SettingValueList") },
    ], false),
    "VideoLibraryGetGenres": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("FileElement")) },
        { json: "returns", js: "returns", typ: r("AudioLibraryGetGenresReturns") },
    ], false),
    "VideoLibraryGetInProgressTVShows": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetGenresParam")) },
        { json: "returns", js: "returns", typ: r("VideoLibraryGetInProgressTVShowsReturns") },
    ], false),
    "VideoLibraryGetInProgressTVShowsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties69") },
    ], false),
    "Properties69": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "tvshows", js: "tvshows", typ: r("SettingValueList") },
    ], false),
    "VideoLibraryGetMovieDetails": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonsGetAddonDetailsParam")) },
        { json: "returns", js: "returns", typ: r("VideoLibraryGetMovieDetailsReturns") },
    ], false),
    "VideoLibraryGetMovieDetailsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties70") },
    ], false),
    "Properties70": o([
        { json: "moviedetails", js: "moviedetails", typ: r("AdditionalProperties") },
    ], false),
    "VideoLibraryGetMovieSetDetails": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("FileElement")) },
        { json: "returns", js: "returns", typ: r("VideoLibraryGetMovieSetDetailsReturns") },
    ], false),
    "VideoLibraryGetMovieSetDetailsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties71") },
    ], false),
    "Properties71": o([
        { json: "setdetails", js: "setdetails", typ: r("AdditionalProperties") },
    ], false),
    "VideoLibraryGetMovieSets": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetGenresParam")) },
        { json: "returns", js: "returns", typ: r("VideoLibraryGetMovieSetsReturns") },
    ], false),
    "VideoLibraryGetMovieSetsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties72") },
    ], false),
    "Properties72": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "sets", js: "sets", typ: r("SettingValueList") },
    ], false),
    "VideoLibraryGetMovies": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("VideoLibraryGetMoviesParam")) },
        { json: "returns", js: "returns", typ: r("VideoLibraryGetMoviesReturns") },
    ], false),
    "VideoLibraryGetMoviesParam": o([
        { json: "name", js: "name", typ: r("PurpleName") },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, a(r("Type2"))) },
    ], false),
    "Type2": o([
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "properties", js: "properties", typ: u(undefined, r("Properties73")) },
        { json: "additionalProperties", js: "additionalProperties", typ: u(undefined, true) },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
    ], false),
    "Properties73": o([
        { json: "genreid", js: "genreid", typ: u(undefined, r("AlbumidElement")) },
        { json: "genre", js: "genre", typ: u(undefined, r("RecordingidElement")) },
        { json: "year", js: "year", typ: u(undefined, r("LibraryID")) },
        { json: "actor", js: "actor", typ: u(undefined, r("RecordingidElement")) },
        { json: "director", js: "director", typ: u(undefined, r("RecordingidElement")) },
        { json: "studio", js: "studio", typ: u(undefined, r("Filetype")) },
        { json: "country", js: "country", typ: u(undefined, r("RecordingidElement")) },
        { json: "setid", js: "setid", typ: u(undefined, r("AlbumidElement")) },
        { json: "set", js: "set", typ: u(undefined, r("Filetype")) },
        { json: "tag", js: "tag", typ: u(undefined, r("Filetype")) },
    ], false),
    "VideoLibraryGetMoviesReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("VideoDetailsMovieSetExtendedProperties") },
    ], false),
    "VideoLibraryGetMusicVideoDetails": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibrarySetAlbumDetailsParam")) },
        { json: "returns", js: "returns", typ: r("VideoLibraryGetMusicVideoDetailsReturns") },
    ], false),
    "VideoLibraryGetMusicVideoDetailsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties74") },
    ], false),
    "Properties74": o([
        { json: "musicvideodetails", js: "musicvideodetails", typ: r("AdditionalProperties") },
    ], false),
    "VideoLibraryGetMusicVideos": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("VideoLibraryGetMusicVideosParam")) },
        { json: "returns", js: "returns", typ: r("VideoLibraryGetMusicVideosReturns") },
    ], false),
    "VideoLibraryGetMusicVideosParam": o([
        { json: "name", js: "name", typ: r("PurpleName") },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, a(r("Type3"))) },
    ], false),
    "Type3": o([
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "properties", js: "properties", typ: u(undefined, r("Properties75")) },
        { json: "additionalProperties", js: "additionalProperties", typ: u(undefined, true) },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
    ], false),
    "Properties75": o([
        { json: "artist", js: "artist", typ: u(undefined, r("Language")) },
        { json: "genreid", js: "genreid", typ: u(undefined, r("AlbumidElement")) },
        { json: "genre", js: "genre", typ: u(undefined, r("Language")) },
        { json: "year", js: "year", typ: u(undefined, r("LibraryID")) },
        { json: "director", js: "director", typ: u(undefined, r("Language")) },
        { json: "studio", js: "studio", typ: u(undefined, r("SkinElement")) },
        { json: "tag", js: "tag", typ: u(undefined, r("SkinElement")) },
    ], false),
    "VideoLibraryGetMusicVideosReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties76") },
    ], false),
    "Properties76": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "musicvideos", js: "musicvideos", typ: r("SettingValueList") },
    ], false),
    "VideoLibraryGetRecentlyAddedEpisodes": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetGenresParam")) },
        { json: "returns", js: "returns", typ: r("VideoLibraryGetEpisodesReturns") },
    ], false),
    "VideoLibraryGetRecentlyAddedMovies": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetGenresParam")) },
        { json: "returns", js: "returns", typ: r("VideoLibraryGetMoviesReturns") },
    ], false),
    "VideoLibraryGetRecentlyAddedMusicVideos": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetGenresParam")) },
        { json: "returns", js: "returns", typ: r("VideoLibraryGetMusicVideosReturns") },
    ], false),
    "VideoLibraryGetSeasonDetails": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("PVRRecordParam")) },
        { json: "returns", js: "returns", typ: r("VideoLibraryGetSeasonDetailsReturns") },
    ], false),
    "VideoLibraryGetSeasonDetailsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties77") },
    ], false),
    "Properties77": o([
        { json: "seasondetails", js: "seasondetails", typ: r("AdditionalProperties") },
    ], false),
    "VideoLibraryGetSeasons": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AudioLibraryGetGenresParam")) },
        { json: "returns", js: "returns", typ: r("VideoLibraryGetSeasonsReturns") },
    ], false),
    "VideoLibraryGetSeasonsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties78") },
    ], false),
    "Properties78": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "seasons", js: "seasons", typ: r("SettingValueList") },
    ], false),
    "VideoLibraryGetTVShowDetails": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("RecordingidElement")) },
        { json: "returns", js: "returns", typ: r("VideoLibraryGetTVShowDetailsReturns") },
    ], false),
    "VideoLibraryGetTVShowDetailsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties79") },
    ], false),
    "Properties79": o([
        { json: "tvshowdetails", js: "tvshowdetails", typ: r("AdditionalProperties") },
    ], false),
    "VideoLibraryGetTVShows": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("VideoLibraryGetTVShowsParam")) },
        { json: "returns", js: "returns", typ: r("VideoLibraryGetInProgressTVShowsReturns") },
    ], false),
    "VideoLibraryGetTVShowsParam": o([
        { json: "name", js: "name", typ: r("PurpleName") },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, a(r("Type4"))) },
    ], false),
    "Type4": o([
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "properties", js: "properties", typ: u(undefined, r("Properties80")) },
        { json: "additionalProperties", js: "additionalProperties", typ: u(undefined, true) },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
    ], false),
    "Properties80": o([
        { json: "genreid", js: "genreid", typ: u(undefined, r("AlbumidElement")) },
        { json: "genre", js: "genre", typ: u(undefined, r("Filetype")) },
        { json: "year", js: "year", typ: u(undefined, r("LibraryID")) },
        { json: "actor", js: "actor", typ: u(undefined, r("Filetype")) },
        { json: "studio", js: "studio", typ: u(undefined, r("Language")) },
        { json: "tag", js: "tag", typ: u(undefined, r("Language")) },
    ], false),
    "VideoLibraryGetTags": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("AddonsGetAddonDetailsParam")) },
        { json: "returns", js: "returns", typ: r("VideoLibraryGetTagsReturns") },
    ], false),
    "VideoLibraryGetTagsReturns": o([
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "properties", js: "properties", typ: r("Properties81") },
    ], false),
    "Properties81": o([
        { json: "limits", js: "limits", typ: r("AlbumidElement") },
        { json: "tags", js: "tags", typ: r("Groups") },
    ], false),
    "VideoLibraryOnExport": o([
        { json: "type", js: "type", typ: r("ApplicationOnVolumeChangedType") },
        { json: "description", js: "description", typ: "" },
        { json: "params", js: "params", typ: a(r("SkinElement")) },
        { json: "returns", js: "returns", typ: null },
    ], false),
    "VideoLibraryRefresh": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("VideoLibraryRefreshEpisodeParam")) },
        { json: "returns", js: "returns", typ: r("ReturnsElement") },
    ], false),
    "VideoLibraryRefreshEpisodeParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "$ref", js: "$ref", typ: u(undefined, r("ParamRef")) },
        { json: "required", js: "required", typ: u(true, "") },
        { json: "type", js: "type", typ: u(undefined, r("ReturnsElement")) },
        { json: "default", js: "default", typ: u(undefined, u(true, "")) },
        { json: "description", js: "description", typ: u(undefined, "") },
    ], false),
    "XbmcGetInfo": o([
        { json: "type", js: "type", typ: r("AddonsExecuteAddonType") },
        { json: "description", js: "description", typ: "" },
        { json: "transport", js: "transport", typ: r("Transport") },
        { json: "permission", js: "permission", typ: "" },
        { json: "params", js: "params", typ: a(r("XBMCGetInfoBooleansParam")) },
        { json: "returns", js: "returns", typ: r("TypeReturns") },
    ], false),
    "XBMCGetInfoBooleansParam": o([
        { json: "name", js: "name", typ: "" },
        { json: "type", js: "type", typ: r("ReturnsElement") },
        { json: "required", js: "required", typ: true },
        { json: "items", js: "items", typ: r("AuthorClass") },
        { json: "minItems", js: "minItems", typ: 0 },
        { json: "description", js: "description", typ: u(undefined, "") },
    ], false),
    "ReturnsElement": [
        "any",
        "array",
        "boolean",
        "integer",
        "null",
        "number",
        "object",
        "string",
        "Integer",
        "Video.Ratings",
    ],
    "Extends": [
        "Item.Fields.Base",
    ],
    "Transport": [
        "Response",
    ],
    "AddonsExecuteAddonType": [
        "method",
    ],
    "ParamRef": [
        "Global.Toggle",
        "Input.Action",
        "Library.Id",
        "Optional.Boolean",
        "Optional.Integer",
        "Optional.Number",
        "Optional.String",
        "Player.Id",
        "Playlist.Id",
        "Playlist.Position",
        "Setting.Level",
        "Video.Fields.MusicVideo",
        "Video.Ratings.Set",
    ],
    "ApplicationOnVolumeChangedType": [
        "notification",
    ],
    "Permission": [
        "ControlPlayback",
        "Navigate",
        "RemoveData",
    ],
    "PurpleName": [
        "filter",
        "limits",
        "properties",
        "season",
        "sort",
        "tvshowid",
    ],
    "FluffyName": [
        "data",
        "sender",
    ],
    "PurpleRef": [
        "Array.String",
        "Global.IncrementDecrement",
        "Media.Artwork.Set",
        "Media.UniqueID.Set",
        "Video.Resume",
    ],
};
