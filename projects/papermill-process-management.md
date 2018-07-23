# Upgrade papermill's process management 
The process management aspect of papermill could use a rework. Today if the kernel dies, or an OOM event occurs we both lose logs and can hang papermill indefinitely.

### Project Lead
Matthew Seal (`mseal` on slack)

## Process Monitoring:
Process management in papermill today makes some optimistic assumptions. When you write a bad notebook or aren't in a stable environment this leads to frustration. Let's make it better!

- Make papermill aware of it's child process.
- Crash when child process exits unexpectantly [#125](https://github.com/nteract/papermill/issues/125).
- Ideas around info or debug logging around process events?

## Log Persistance:
Logs get lost a lot on fatal events because the kernel executor is buffering everything. We want a way to capture and buffer to disk from the parent papermill process when not executing on a server. Ideas welcome outside the ones presented below.

- Persist logs as they arrive to preserve logs on failure [#127](https://github.com/nteract/papermill/issues/127).
- Save notebook periodically for long running cells to preserve messages
