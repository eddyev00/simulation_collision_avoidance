# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.26

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /home/eddye/.local/lib/python3.8/site-packages/cmake/data/bin/cmake

# The command to remove a file.
RM = /home/eddye/.local/lib/python3.8/site-packages/cmake/data/bin/cmake -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/eddye/drone_ws/src/mavlink

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/eddye/drone_ws/build/mavlink

# Utility rule file for ardupilotmega.xml-v2.0.

# Include any custom commands dependencies for this target.
include CMakeFiles/ardupilotmega.xml-v2.0.dir/compiler_depend.make

# Include the progress variables for this target.
include CMakeFiles/ardupilotmega.xml-v2.0.dir/progress.make

CMakeFiles/ardupilotmega.xml-v2.0: ardupilotmega-v2.0-cxx-stamp

ardupilotmega-v2.0-cxx-stamp: /home/eddye/drone_ws/src/mavlink/message_definitions/v1.0/ardupilotmega.xml
ardupilotmega-v2.0-cxx-stamp: /home/eddye/drone_ws/src/mavlink/message_definitions/v1.0/common.xml
ardupilotmega-v2.0-cxx-stamp: /home/eddye/drone_ws/src/mavlink/pymavlink/tools/mavgen.py
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold --progress-dir=/home/eddye/drone_ws/build/mavlink/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Generating ardupilotmega-v2.0-cxx-stamp"
	/usr/bin/env PYTHONPATH="/home/eddye/drone_ws/src/mavlink:/home/eddye/yolobot/devel/lib/python3/dist-packages:/opt/ros/noetic/lib/python3/dist-packages" /usr/bin/python3.8 /home/eddye/drone_ws/src/mavlink/pymavlink/tools/mavgen.py --lang=C++11 --wire-protocol=2.0 --output=include/v2.0 /home/eddye/drone_ws/src/mavlink/message_definitions/v1.0/ardupilotmega.xml
	touch ardupilotmega-v2.0-cxx-stamp

ardupilotmega.xml-v2.0: CMakeFiles/ardupilotmega.xml-v2.0
ardupilotmega.xml-v2.0: ardupilotmega-v2.0-cxx-stamp
ardupilotmega.xml-v2.0: CMakeFiles/ardupilotmega.xml-v2.0.dir/build.make
.PHONY : ardupilotmega.xml-v2.0

# Rule to build all files generated by this target.
CMakeFiles/ardupilotmega.xml-v2.0.dir/build: ardupilotmega.xml-v2.0
.PHONY : CMakeFiles/ardupilotmega.xml-v2.0.dir/build

CMakeFiles/ardupilotmega.xml-v2.0.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/ardupilotmega.xml-v2.0.dir/cmake_clean.cmake
.PHONY : CMakeFiles/ardupilotmega.xml-v2.0.dir/clean

CMakeFiles/ardupilotmega.xml-v2.0.dir/depend:
	cd /home/eddye/drone_ws/build/mavlink && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/eddye/drone_ws/src/mavlink /home/eddye/drone_ws/src/mavlink /home/eddye/drone_ws/build/mavlink /home/eddye/drone_ws/build/mavlink /home/eddye/drone_ws/build/mavlink/CMakeFiles/ardupilotmega.xml-v2.0.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/ardupilotmega.xml-v2.0.dir/depend

