import { Dropbox } from 'dropbox';

const dbx = new Dropbox({
  accessToken: const apiKey = process.env.DROPBOX_ID;
,
});
dbx.filesDownload({ path: '/sire/ip.js' })
  .then((response) => {
    // The file contents are in the `fileBinary` field of the response
    const fileContents = response.fileBinary;
  })
  .catch((error) => {
    console.error(error);
  });
